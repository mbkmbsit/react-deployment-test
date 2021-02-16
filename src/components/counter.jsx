import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: this.props.counter.value,
		imageUrl: 'https://picsum.photos/200/300',
		// tags: [ 'tag1', 'tag2', 'tag3' ]
		tags: []
	};
	styles = {
		fontSize: 20,
		fontWeight: 'bold'
	};
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		let classes = this.getBadgeClasses();
		console.log('props :>> ', this.props);
		console.log('props value: ', this.props.value);

		const { onIncrement, onDecrement, onDelete, counter, children } = this.props;
		return (
			<div>
				{children}
				<div className="row">
					<div className="col-1">
						<span className={classes}>{this.formatCount()}</span>
					</div>
					<div className="col">
						<button onClick={() => onIncrement(counter)} className="btn btn-primary btn-sm">
							Increment
						</button>
						<button
							onClick={() => onDecrement(counter)}
							className="btn btn-primary btn-sm m-2"
							disabled={counter.value === 0 ? 'disabled' : ''}
						>
							Decrement
						</button>
						<button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">
							Delete
						</button>
					</div>
				</div>
				<img src={this.state.imageUrl} alt="image" />

				{this.renderTags()}
				{this.state.tags.length === 0 && 'Please create new tag !'}
				<h1>-------------</h1>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'badge badge-pill  m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? <h3>zero</h3> : count;
	}
	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags !</p>;

		return <ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
	}
}

export default Counter;
