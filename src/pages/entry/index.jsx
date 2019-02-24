import React, { Component } from 'react';

import dispatcher from 'bakadux';

import '../../components/general/common.scss'

import history from '../../components/general/history.js';
import generalStore from '../../components/general/store.js';
import generalActions from '../../components/general/actions.js';

import Radio from '../../components/general/radio.jsx';
import RadioHorizontal from '../../components/general/radiohorizontal.jsx';
import Switch from '../../components/general/switch.jsx';

class Page extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<section>
				<RadioHorizontal func={generalActions.toggleLog} values={generalStore.get('logTypes')} activeValue={generalStore.get('selectedLogType')} />
				<Switch func={generalActions.toggleLoose} values={generalStore.get('looseTypes')} activeValue={generalStore.get('selectedLooseType')} />
				<Radio func={generalActions.toggleRecover} values={generalStore.get('recoverTypes')} activeValue={generalStore.get('selectedRecoverType')} />
			</section>
		);
	}
}

dispatcher.render(Page);