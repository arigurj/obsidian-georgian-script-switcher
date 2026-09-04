# Georgian Script Switcher

Плагин для [Obsidian](https://obsidian.md/), переводящий текст между грузинским, латинским и кириллическим алфавитами.

---

## The Problem

Georgian is written in its unique script (მხედრული), but Latin transliteration (kartuli) and Cyrillic phonetic approximations are also used. This plugin converts between all three systems.

## Commands

In the command palette (`Ctrl+P` / `Cmd+P`):

| Command | Description |
|---------|-------------|
| **Convert (Georgian → Latin)** | Georgian → Latin (ISO 9984) |
| **Convert (Latin → Georgian)** | Latin → Georgian |
| **Convert (Georgian → Cyrillic)** | Georgian → Cyrillic phonetic |
| **Convert (Cyrillic → Georgian)** | Cyrillic → Georgian |
| **Convert (Latin → Cyrillic)** | Latin → Cyrillic (via Georgian) |
| **Convert (Cyrillic → Latin)** | Cyrillic → Latin (via Georgian) |
| **Convert script (auto)** | Auto-detect direction |

## Usage

1. Select the text in the wrong script.
2. Open the command palette (`Ctrl+P` / `Cmd+P`).
3. Pick the appropriate conversion.
4. The text converts instantly.

Bind a hotkey in **Settings → Hotkeys** (e.g. `Ctrl+Shift+G`) for quick access.

## Installation

### Obsidian Community plugins

Available in **Settings → Community plugins → Browse** as **Georgian Script Switcher**.

### Manual

1. Download `main.js`, `manifest.json`, `styles.css` from the [releases](https://github.com/arigurj/obsidian-georgian-script-switcher/releases).
2. Place them in `<vault>/.obsidian/plugins/georgian-script-switcher/`.
3. Enable the plugin in **Settings → Community plugins**.

### Development

```bash
git clone https://github.com/arigurj/obsidian-georgian-script-switcher.git
cd obsidian-georgian-script-switcher
npm install
npm run dev   # watch mode
npm run build # production build
```

## Conversion tables

### Georgian ↔ Latin (ISO 9984)

| Georgian | Latin | | Georgian | Latin |
|----------|-------|--|----------|-------|
| ა | a | | კ | k | 
| ბ | b | | ლ | l |
| გ | g | | მ | m |
| დ | d | | ნ | n |
| ე | e | | ო | o |
| ვ | v | | პ | p |
| ზ | z | | ჟ | zh |
| თ | t | | რ | r |
| ი | i | | ს | s |

### Georgian ↔ Cyrillic

| Georgian | Cyrillic | | Georgian | Cyrillic |
|----------|----------|--|----------|----------|
| ა | ა | | ღ | ҕ |
| ბ | б | | ყ | ყ |
| გ | г | | შ | ш |
| დ | д | | ჩ | ч |
| ე | ე | | ც | ц |
| ვ | ვ | | ძ | ძ |
| ზ | ზ | | წ | წ |
| თ | თ | | ჭ | ჭ |
| ი | ი | | ხ | ხ |
| კ | კ | | ჯ | ჯ |
| ლ | ლ | | ჰ | ჰ |
| მ | მ | | | |
| ნ | ნ | | | |
| ო | ო | | | |
| პ | პ | | | |

## License

MIT © arigurj

---

## Описание на русском

Плагин для [Obsidian](https://obsidian.md/), переводящий текст между грузинским, латинским и кириллическим алфавитами.

### Команды

| Команда | Описание |
|---------|----------|
| **Convert (Georgian → Latin)** | Грузинский → Латинский |
| **Convert (Latin → Georgian)** | Латинский → Грузинский |
| **Convert (Georgian → Cyrillic)** | Грузинский → Кириллица |
| **Convert (Cyrillic → Georgian)** | Кириллица → Грузинский |
| **Convert (Latin → Cyrillic)** | Латинский → Кириллица |
| **Convert (Cyrillic → Latin)** | Кириллица → Латинский |
| **Convert script (auto)** | Автоопределение |

### Установка

Доступен в **Settings → Community plugins → Browse** как **Georgian Script Switcher**.

### Лицензия

MIT © arigurj

---

## აღწერა ქართულად

პლაგინი [Obsidian](https://obsidian.md/) — ტექსტის გადაყვანა ქართულ, ლათინურ და კირილიცის ანბანებს შორის.

### ბრძანებები

| ბრძანება | აღწერა |
|----------|--------|
| **Convert (Georgian → Latin)** | ქართული → ლათინური |
| **Convert (Latin → Georgian)** | ლათინური → ქართული |
| **Convert (Georgian → Cyrillic)** | ქართული → კირილიცა |
| **Convert (Cyrillic → Georgian)** | კირილიცა → ქართული |
| **Convert (Latin → Cyrillic)** | ლათინური → კირილიცა |
| **Convert (Cyrillic → Latin)** | კირილიცა → ლათინური |
| **Convert script (auto)** | ავტომატური განსაზღვრა |

### დაყენება

ხელმისაწვდომია **Settings → Community plugins → Browse** როგორც **Georgian Script Switcher**.

### ლიცენზია

MIT © arigurj
