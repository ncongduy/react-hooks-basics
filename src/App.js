import { useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';

const initTodoList = [
	{ id: 1, title: 'I love Easy Frontend! 😍 ' },
	{ id: 2, title: 'We love Easy Frontend! 🥰 ' },
	{ id: 3, title: 'They love Easy Frontend! 🚀 ' },
];

function App() {
	const [todoList, setTodoList] = useState(initTodoList);

	function handleTodoListClick(id) {
		const newTodoList = todoList.filter((todo) => id !== todo.id);
		setTodoList(newTodoList);
	}

	return (
		<div className='app'>
			<h1>React Hooks - Todo List</h1>
			<TodoList
				todoList={todoList}
				onTodoListClick={handleTodoListClick}
			/>
		</div>
	);
}

export default App;
