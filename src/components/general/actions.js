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
		actionType: 'toggleOption',
		func: ({stores}, key) => {
			const generalStore = stores.general;

			let options = generalStore.get('toggleOptions');
			let option = options.get(key);

			option.enabled = !option.enabled;

			options.set(key, option);

			generalStore.set('toggleOptions', options);
		}
	},
	{
		actionType: 'setBatchSize',
		func: ({stores}, event) => {
			const generalStore = stores.general;
			let value = event.target.value;

			if (value !== '') {
				value = Math.round(value);

				if (value > 200)
					value = 200;

				if (value < 1)
					value = 1;
			}

			generalStore.set('batchSize', value);
		}
	},
	{
		actionType: 'setOutputMode',
		func: ({stores}, key) => {
			const generalStore = stores.general;

			generalStore.set('selectedOutputMode', key);
		}
	},
	{
		actionType: 'setWorkingDirectory',
		func: ({stores}, {target}) => {
			console.log(target.files);
		}
	}
]);