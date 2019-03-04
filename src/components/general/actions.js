import { CreateActions } from 'bakadux';

const { ipcRenderer } = require('electron');

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
			stores.general.set('workingDir', target.files[0].path);

			console.log(target.files);
		}
	},
    {
        actionType: 'runXesConverter',
        func: ({stores}) => {
			const generalStore = stores.general;
			const toggleOptions = generalStore.get('toggleOptions');

			ipcRenderer.send('messages', {
				uri: generalStore.get('workingDir'),
				options: {
					xes: toggleOptions.get('xes').enabled,
                    qlw: toggleOptions.get('qlw').enabled,
                    sum: toggleOptions.get('sum').enabled,
                    qmap: toggleOptions.get('qmap').enabled,
                    map: toggleOptions.get('map').enabled,
                    line: toggleOptions.get('line').enabled,
					recover: toggleOptions.get('recover').enabled,
					loose: generalStore.get('selectedLooseType') === 'loose'
				}
			})
        }
    }
]);