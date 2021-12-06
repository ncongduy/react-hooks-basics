import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

TodoList.propTypes = {
	todoList: PropTypes.array,
	setTodoList: PropTypes.func,
};

TodoList.defaultProps = {
	todoList: [],
	onTodoListClick: null,
};

function TodoList(props) {
	const { todoList, onTodoListClick } = props;

	function handleTodoList(id) {
		if (!onTodoListClick) return;
		onTodoListClick(id);
	}

	return (
		<div className='todo-list'>
			{todoList.map((todo) => (
				<li key={todo.id} onClick={() => handleTodoList(todo.id)}>
					{todo.title}
				</li>
			))}
		</div>
	);
}

export default TodoList;
