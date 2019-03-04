import React, { Component } from 'react';

import '../../components/general/common.scss'

export default class Dropdown extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="dropdown" onClick={this.props.func.bind(null, this.props.value)}>
				<select onChange={this.props.func}>
					{this.props.options.map(({value, text}) => {
							if (value === this.props.selectedValue)
								return (<option key={value} value={value} selected>{text}</option>);
							else
								return (<option key={value} value={value}>{text}</option>);
						}
					)}
				</select>
				<label>{this.props.text}</label>
			</div>
		);
	}
}