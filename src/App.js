import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
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

	function handleTodoFormSubmit(valueSubmit) {
		const newTodo = {
			id: todoList.length + 1,
			...valueSubmit,
		};
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);

		setTodoList(newTodoList);
	}

	return (
		<div className='app'>
			<h1>React Hooks - Todo List</h1>
			<TodoForm onSubmit={handleTodoFormSubmit} />
			<TodoList
				todoList={todoList}
				onTodoListClick={handleTodoListClick}
			/>
		</div>
	);
}

export default App;
