import React, { Component } from 'react';
import Counter from './counter';
import NavBar from './NavBar';
class Counters extends Component {
	state = {
		counters: [ { id: 1, value: 4 }, { id: 2, value: 1 }, { id: 3, value: 2 }, { id: 4, value: 4 } ]
	};
	handleIncrement = (counter) => {
		console.log('Increment Clicked', this);

		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};
	handleDecrement = (counter) => {
		console.log('Decrement Clicked', this);

		const counters = [ ...this.state.counters ];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => c.id !== counterId);
		this.setState({ counters });
	};
	render() {
		return (
			<React.Fragment>
				<NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
				<main className="container">
					<div>
						<button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
							Reset
						</button>
						{this.state.counters.map((counter) => (
							<Counter
								key={counter.id}
								onIncrement={this.handleIncrement}
								onDecrement={this.handleDecrement}
								onDelete={this.handleDelete}
								counter={counter}
							>
								<h4>Counter: #{counter.id}</h4>
							</Counter>
						))}
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Counters;
