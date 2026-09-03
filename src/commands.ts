/**
 * Регистрация команд плагина Georgian Script Switcher.
 */
import { Editor, MarkdownFileInfo, MarkdownView, Notice, Plugin } from 'obsidian';
import { convertText, Direction } from './convert';

function convertSelection(
	editor: Editor,
	direction: Direction,
	label: string,
): void {
	const selection = editor.getSelection();
	if (!selection) {
		new Notice('No selected text to convert.');
		return;
	}

	const converted = convertText(selection, direction);
	if (converted === selection) {
		new Notice('Text did not change — script may already be correct.');
		return;
	}

	editor.replaceSelection(converted);
	new Notice(`✓ ${label}`);
}

export function registerCommands(plugin: Plugin): void {
	plugin.addCommand({
		id: 'convert-georgian-to-latin',
		name: 'Convert (Georgian → Latin)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'georgian-to-latin', 'Georgian → Latin');
		},
	});

	plugin.addCommand({
		id: 'convert-latin-to-georgian',
		name: 'Convert (Latin → Georgian)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'latin-to-georgian', 'Latin → Georgian');
		},
	});

	plugin.addCommand({
		id: 'convert-georgian-to-cyrillic',
		name: 'Convert (Georgian → Cyrillic)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'georgian-to-cyrillic', 'Georgian → Cyrillic');
		},
	});

	plugin.addCommand({
		id: 'convert-cyrillic-to-georgian',
		name: 'Convert (Cyrillic → Georgian)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'cyrillic-to-georgian', 'Cyrillic → Georgian');
		},
	});

	plugin.addCommand({
		id: 'convert-latin-to-cyrillic',
		name: 'Convert (Latin → Cyrillic)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'latin-to-cyrillic', 'Latin → Cyrillic');
		},
	});

	plugin.addCommand({
		id: 'convert-cyrillic-to-latin',
		name: 'Convert (Cyrillic → Latin)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			convertSelection(editor, 'cyrillic-to-latin', 'Cyrillic → Latin');
		},
	});

	plugin.addCommand({
		id: 'convert-script-auto',
		name: 'Convert script (auto)',
		editorCallback: (editor: Editor, _ctx: MarkdownView | MarkdownFileInfo) => {
			const selection = editor.getSelection();
			if (!selection) {
				new Notice('No selected text.');
				return;
			}
			const detected: Direction = /[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]/.test(selection)
				? 'georgian-to-latin'
				: /[ҕқдзджһ]/.test(selection)
				? 'cyrillic-to-georgian'
				: 'latin-to-georgian';
			const label =
				detected === 'georgian-to-latin'
					? 'auto: Georgian → Latin'
					: detected === 'cyrillic-to-georgian'
					? 'auto: Cyrillic → Georgian'
					: 'auto: Latin → Georgian';
			convertSelection(editor, detected, label);
		},
	});
}
