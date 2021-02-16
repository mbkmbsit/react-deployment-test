import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './actions/actionTypes';
import * as actionCreator from './actions/actions';
class MyApp extends Component {
	state = {
		counter: 0
	};
	handleIncrement = () => {
		const { counter } = this.state;
		this.setState({ counter: counter + 1 });
		console.log(this.props.counter);
		console.log(this.props);
	};
	render() {
		return (
			<div>
				<div className="container">
					<h3>
						My app: <br />
						{this.state.counter}:
						{/* {this.props.counter} */}
						{this.props.counter}
					</h3>
					<button className="btn btn-primary" onClick={this.handleIncrement}>
						state add
					</button>
					<button className="btn btn-primary" onClick={() => this.handleIncrement()}>
						state add
					</button>
					<button className="btn btn-primary" onClick={this.props.onIncrementCounter}>
						store counter add
					</button>
					<button className="btn btn-primary" onClick={this.props.onDecrementCounter}>
						store counter delete
					</button>
					<button className="btn btn-primary" onClick={this.props.onAddCounter}>
						store counter add
					</button>
					<button className="btn btn-primary" onClick={this.props.onSubCounter}>
						store counter sub
					</button>
					<button className="btn btn-primary" onClick={this.props.onStoreResult}>
						store counter in result
					</button>

					{this.props.storedResults ? (
						<ul className="list-group">
							{this.props.storedResults.map((item, index) => (
								<li
									className="list-group-item sm-2"
									key={index}
									onClick={() => this.props.onDeleteResult(index)}
								>
									{item}
								</li>
							))}
						</ul>
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	console.log('state :>> ', state);
	return { counter: state.counterR.counter, storedResults: state.counterR.results };
};

const mapDispatchToProps = (dispatch) => {
	// return {
	// 	onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
	// 	onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
	// 	onAddCounter: () => dispatch({ type: 'ADD', value: 10 }),
	// 	onSubCounter: () => dispatch({ type: 'SUB', value: 10 }),
	// 	onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
	// 	onDeleteResult: (index) => dispatch({ type: 'DELETE_RESULT', index })
	// };
	return {
		onIncrementCounter: () => dispatch(actionCreator.increament()),
		onDecrementCounter: () => dispatch(actionCreator.decreament()),
		onAddCounter: () => dispatch(actionCreator.add(10)),
		onSubCounter: () => dispatch(actionCreator.sub(10)),
		onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
		onDeleteResult: (index) => dispatch({ type: 'DELETE_RESULT', index })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
// const dispatch = useDispatch(function)
