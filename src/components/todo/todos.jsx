import React, { Component } from 'react';
import TodoApp from './todo.jsx';
// import { style } from './todos.module.scss';
// import './todos.module.scss';

let items = [];
const initialItems = [
	{ text: 'Edit me (double click)', done: false },
	{ text: "I'm done", done: true },
	{ text: 'You can filter me', done: true }
];

try {
	items = JSON.parse(localStorage.getItem('items'));
} catch (err) {}

if (items === null || items.length === 0) {
	items = initialItems;
}

class TodoApps extends Component {
	render() {
		// const items = [];

		return (
			<div>
				{/* <TodoApp items={items} className={style} /> */}
				{/* <TodoApp items={items} className="root" /> */}
				<TodoApp items={items} />
			</div>
		);
	}
}

export default TodoApps;
