import { Plugin } from 'obsidian';
import { registerCommands } from './commands';

export default class GeorgianScriptSwitcher extends Plugin {
	async onload(): Promise<void> {
		console.log('[Georgian Script Switcher] loading...');
		registerCommands(this);
		console.log('[Georgian Script Switcher] loaded with 7 commands');
	}
}
