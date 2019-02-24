import React, { Component } from 'react';

import '../../components/general/common.scss'

export default class Switch extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="switch-selector">
				<div className={this.props.values[0].value === this.props.activeValue ? 'selected' : ''} onClick={this.props.func.bind(null, this.props.values[0].value)}><div></div></div>
				<div className={this.props.values[0].value === this.props.activeValue ? 'selected' : ''} key={this.props.values[0].value} onClick={this.props.func.bind(null, this.props.values[0].value)} id={this.props.values[0].value}>
					<div><label>{this.props.values[0].text}</label></div>
				</div>
				<div className={this.props.values[1].value === this.props.activeValue ? 'selected' : ''} key={this.props.values[1].value} onClick={this.props.func.bind(null, this.props.values[1].value)} id={this.props.values[1].value}>
					<div><label>{this.props.values[1].text}</label></div>
				</div>
				<div className={this.props.values[1].value === this.props.activeValue ? 'selected' : ''} onClick={this.props.func.bind(null, this.props.values[1].value)}><div></div></div>
			</div>
		);
	}
}