/**
 * Конвертация текста между грузинским, латинским и кириллическим алфавитами.
 */
import {
	georgianToLatin,
	latinToGeorgian,
	georgianToCyrillic,
	cyrillicToGeorgian,
} from './maps';

export type Script = 'georgian' | 'latin' | 'cyrillic';
export type Direction =
	| 'georgian-to-latin'
	| 'latin-to-georgian'
	| 'georgian-to-cyrillic'
	| 'cyrillic-to-georgian'
	| 'latin-to-cyrillic'
	| 'cyrillic-to-latin'
	| 'auto';

/** Конвертирует символ из одного скрипта в другой через промежуточный Georgian */
function convertViaGeorgian(
	ch: string,
	fromMap: [string, string][],
	toMap: Map<string, string>,
): string {
	// Сначала конвертируем в Georgian
	let georgian = '';
	for (const [from, to] of fromMap) {
		if (ch === from) {
			georgian = to;
			break;
		}
	}
	if (!georgian) return ch;

	// Потом из Georgian в целевой
	return toMap.get(georgian) ?? ch;
}

/** Конвертирует текст между скриптами напрямую */
function convertDirect(text: string, map: [string, string][]): string {
	let result = '';
	let i = 0;
	const chars = Array.from(text);

	while (i < chars.length) {
		const ch = chars[i];
		const next = chars[i + 1];

		// Проверяем двухсимвольные последовательности
		if (next) {
			const pair = ch + next;
			let found = false;
			for (const [from, to] of map) {
				if (pair === from && from.length === 2) {
					result += to;
					i += 2;
					found = true;
					break;
				}
			}
			if (found) continue;
		}

		// Одиночный символ
		let converted = false;
		for (const [from, to] of map) {
			if (ch === from && from.length === 1) {
				result += to;
				converted = true;
				break;
			}
		}
		if (!converted) result += ch;
		i++;
	}
	return result;
}

/** Определяет скрипт текста */
function detectScript(text: string): Script {
	const georgianCount = Array.from(text).filter(ch =>
		'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ'.includes(ch),
	).length;

	const cyrillicCount = Array.from(text).filter(ch =>
		'абвгдежзийклмнопрстуфхцчшщъыьэюяҕқдзджһ'.includes(ch),
	).length;

	if (georgianCount > cyrillicCount && georgianCount > 0) return 'georgian';
	if (cyrillicCount > 0) return 'cyrillic';
	return 'latin';
}

/**
 * Конвертирует текст между грузинским, латинским и кириллическим алфавитами.
 */
export function convertText(text: string, direction: Direction = 'auto'): string {
	if (!text) return text;

	const fromMapLatin = new Map(latinToGeorgian);
	const fromMapCyrillic = new Map(cyrillicToGeorgian);
	const toMapGeorgian = new Map(georgianToLatin.map(([g, l]) => [g, l]));

	let dir = direction;
	if (dir === 'auto') {
		const detected = detectScript(text);
		if (detected === 'georgian') dir = 'georgian-to-latin';
		else if (detected === 'cyrillic') dir = 'cyrillic-to-georgian';
		else dir = 'latin-to-georgian';
	}

	switch (dir) {
		case 'georgian-to-latin':
			return convertDirect(text, georgianToLatin);
		case 'latin-to-georgian':
			return convertDirect(text, latinToGeorgian);
		case 'georgian-to-cyrillic':
			return convertDirect(text, georgianToCyrillic);
		case 'cyrillic-to-georgian':
			return convertDirect(text, cyrillicToGeorgian);
		case 'latin-to-cyrillic': {
			// Latin → Georgian → Cyrillic
			const georgian = convertDirect(text, latinToGeorgian);
			return convertDirect(georgian, georgianToCyrillic);
		}
		case 'cyrillic-to-latin': {
			// Cyrillic → Georgian → Latin
			const georgian = convertDirect(text, cyrillicToGeorgian);
			return convertDirect(georgian, georgianToLatin);
		}
		default:
			return text;
	}
}
