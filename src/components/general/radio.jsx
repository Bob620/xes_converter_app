import React, { Component } from 'react';

import '../../components/general/common.scss'

export default class Radio extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="radio-selector">
				{this.props.values.map(({value, text}) =>
					<div className={value === this.props.activeValue ? 'selected' : ''} key={value} onClick={this.props.func.bind(null, value)} id={value}>
						<div><div></div></div>
						<label>{text}</label>
					</div>
				)}
			</div>
		);
	}
}