import React, { Component } from 'react';

import dispatcher from 'bakadux';

import '../../components/general/common.scss'

import history from '../../components/general/history.js';
import generalStore from '../../components/general/store.js';
import generalActions from '../../components/general/actions.js';

import Radio from '../../components/general/radio.jsx';
import RadioHorizontal from '../../components/general/radiohorizontal.jsx';
import Switch from '../../components/general/switch.jsx';
import Checkbox from '../../components/general/checkbox.jsx';
import Dropdown from '../../components/general/dropdown.jsx';

class Page extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const toggleOptions = generalStore.get('toggleOptions');

		return (
			<section>
				<RadioHorizontal func={generalActions.toggleLog} values={generalStore.get('logTypes')} selectedValue={generalStore.get('selectedLogType')} />
				<Switch func={generalActions.toggleLoose} values={generalStore.get('looseTypes')} selectedValue={generalStore.get('selectedLooseType')} />
				{Array.from(toggleOptions.values()).map(({value, text, enabled}) =>
					<Checkbox key={value} func={generalActions.toggleOption} value={value} text={text} enabled={enabled}/>
				)}
				<input onChange={generalActions.setBatchSize} placeholder="Batch Size" value={generalStore.get('batchSize')} type="number" step="10" />
				<Dropdown func={generalActions.setOutputMode} options={generalStore.get('outputModes')} selectedValue={generalStore.get('selectedOutputMode')} />
				<input onChange={generalActions.setWorkingDirectory} type="file" webkitdirectory="true" />
				<input type="submit" onClick={generalActions.runXesConverter} />
			</section>
		);
	}
}

dispatcher.render(Page);