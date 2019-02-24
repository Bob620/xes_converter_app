import { Store } from 'bakadux';

module.exports = new Store('general', {
	page: 'landing',
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
	],
	selectedRecoverType: 'none',
	recoverTypes: [
		{
			value: 'recover',
			text: 'Recover'
		},
		{
			value: 'none',
			text: 'None'
		}
	]
});