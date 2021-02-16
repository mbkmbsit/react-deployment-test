import React, { Component } from 'react';

const Text = ({ done, children, ...events }) =>
	done ? <s {...events}>{children}</s> : <span {...events}>{children}</span>;

export default class Item extends Component {
	state = {
		editing: false
	};

	startEditing = () => {
		this.setState({ editing: true }, () => {
			this.input.focus();
		});
	};

	endEditing = () => this.setState({ editing: false });

	render() {
		const { item, onToggle, onRemove, onChange } = this.props;
		const { editing } = this.state;

		return (
			<li className={`item ${editing ? 'editing' : ''}`}>
				<label>
					<input type="checkbox" checked={item.done} onChange={onToggle} disabled={editing} />
					<span className="checkbox" />
				</label>

				<button onClick={onRemove}>[x]</button>

				<span className="text-wrapper">
					<Text done={item.done} onDoubleClick={this.startEditing}>
						{' '}
						{item.text} &nbsp;{' '}
					</Text>

					<input
						type="text"
						onBlur={this.endEditing}
						onKeyPress={(e) => (e.which === 13 || e.keyCode === 13 ? this.endEditing(e) : () => {})}
						ref={(el) => {
							this.input = el;
						}}
						onChange={onChange}
						value={item.text}
					/>
				</span>
			</li>
		);
	}
}
