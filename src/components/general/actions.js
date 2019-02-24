import { CreateActions } from 'bakadux';

module.exports = CreateActions([
	{
		actionType: 'toggleLog',
		func: ({stores}, key) => {
			const generalStore = stores.general;

			generalStore.set('selectedLogType', key);
		}
	},
	{
		actionType: 'toggleLoose',
		func: ({stores}, key) => {
			const generalStore = stores.general;

			generalStore.set('selectedLooseType', key);
		}
	},
	{
		actionType: 'toggleRecover',
		func: ({stores}, key) => {
			const generalStore = stores.general;

			generalStore.set('selectedRecoverType', key);
		}
	}
]);