import React, { Component } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck);

import '../../components/general/common.scss'

export default class Checkbox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={this.props.enabled ? 'toggle-button checked' : 'toggle-button'} onClick={this.props.func.bind(null, this.props.value)}>
				<div>
					<FontAwesomeIcon icon={faCheck}/>
				</div>
				<label>{this.props.text}</label>
			</div>
		);
	}
}