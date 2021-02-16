import React, { Component } from 'react';
import './todo.scss';
import ItemForm from './itemForm';
import Item from './item';
// class Todo extends Component {
// 	render() {
// 		return <div />;
// 	}
// }

// export default Todo;

/*
* Here the magic happens
* tweet me at @adielhercules (jadher.11x2@gmail.com)
*/

class TodoApp extends Component {
	state = {
		items: [],
		filter: 0
	};

	componentWillMount() {
		const { items } = this.props;

		this.setState({ items });
	}

	addItem = (item) => {
		this.setState(
			({ items }) => ({
				items: [
					{
						...item,
						number: items.length
					},
					...items
				]
			}),
			this.save
		);
	};

	toggleItem = (index) => () => {
		this.setState(
			({ items }) => ({
				items: items.map((item, current) => {
					if (index !== current) {
						return item;
					}

					return {
						...item,
						done: !item.done
					};
				})
			}),
			this.save
		);
	};

	removeItem = (index) => () => {
		this.setState(
			({ items }) => ({
				items: items.filter((item, current) => index !== current)
			}),
			this.save
		);
	};

	changeItem = (index) => (e) => {
		const value = e && e.target ? e.target.value : null;

		this.setState(
			({ items }) => ({
				items: items.map((item, current) => {
					if (index !== current) {
						return item;
					}

					return {
						...item,
						text: value === null ? item.text : value
					};
				})
			}),
			this.save
		);
	};

	save = () => {
		localStorage.setItem('items', JSON.stringify(this.state.items));
	};

	setFilter = (filter) => (e) => {
		e.preventDefault();

		this.setState({ filter });
	};

	reset = (e) => {
		e.preventDefault();

		this.setState({ items: [] }, this.save);
	};

	render() {
		const { items = [], filter = 0 } = this.state;

		const filterItems = (item) => {
			if (filter === 1) {
				return item.done;
			}

			if (filter === 2) {
				return !item.done;
			}

			return item;
		};

		return (
			<div className="todo-app">
				<h2>TO-DO</h2>

				<ItemForm
					ref={(el) => {
						this.itemForm = el;
					}}
					onComplete={this.addItem}
				/>

				<div className="filter-tabs">
					<a href="#root" onClick={this.setFilter(0)} className={`filter ${filter === 0 ? 'disabled' : ''}`}>
						Show All
					</a>
					<a href="#root" onClick={this.setFilter(1)} className={`filter ${filter === 1 ? 'disabled' : ''}`}>
						Completed <span>{items.filter((item) => item.done).length}</span>
					</a>
					<a href="#root" onClick={this.setFilter(2)} className={`filter ${filter === 2 ? 'disabled' : ''}`}>
						Incomplete <span>{items.filter((item) => !item.done).length}</span>
					</a>
				</div>

				<ul className="item-list">
					{items.length === 0 && <li className="placeholder">Add your first item</li>}

					{items.length > 0 &&
					items.filter(filterItems).length === 0 && <li className="placeholder">No items</li>}

					{items.map((item, index) => {
						if ((filter === 1 && !item.done) || (filter === 2 && item.done)) {
							return null;
						}

						return (
							<Item
								item={item}
								key={index}
								onChange={this.changeItem(index)}
								onRemove={this.removeItem(index)}
								onToggle={this.toggleItem(index)}
							/>
						);
					})}
				</ul>

				<div className="footer-actions">
					<a
						href="#root"
						className={items.length === 0 ? 'disabled' : ''}
						disabled={items.length === 0}
						onClick={this.reset}
					>
						Clear All
					</a>
				</div>
			</div>
		);
	}
}

//   ReactDOM.render(<TodoApp items={ items } />, window.root);

export default TodoApp;
