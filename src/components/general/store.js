import { Store } from 'bakadux';

module.exports = new Store('general', {
	page: 'landing',
	batchSize: 100,
	selectedOutputMode: 'default',
	outputModes: [
		{
			value: 'default',
			text: 'Default'
		},
		{
			value: 'experiment',
			text: 'Experiment'
		},
		{
			value: 'prefix',
			text: 'Prefix'
		}
	],
	toggleOptions: new Map([
		['xes', {
			value: 'xes',
			text: 'XES',
			enabled: true
		}],
		['qlw', {
			value: 'qlw',
			text: 'QLW',
			enabled: true
		}],
		['sum', {
			value: 'sum',
			text: 'Sum',
			enabled: false
		}],
		['qmap', {
			value: 'qmap',
			text: 'qMap',
			enabled: false
		}],
		['map', {
			value: 'map',
			text: 'Map',
			enabled: false
		}],
		['line', {
			value: 'line',
			text: 'Line',
			enabled: false
		}],
		['recover', {
			value: 'recover',
			text: 'Recovery Mode',
			enabled: false
		}]
	]),
	selectedLogType: 'normal',
	logTypes: [
		{
			value: 'normal',
			text: 'Normal'
		},
		{
			value: 'debug',
			text: 'Debug'
		}
	],
	selectedLooseType: 'strict',
	looseTypes: [
		{
			value: 'strict',
			text: 'Strict'
		},
		{
			value: 'loose',
			text: 'Loose'
		}
	]
});