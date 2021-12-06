import React from 'react';
import PropTypes from 'prop-types';

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

	return (
		<div>
			{todoList.map((todo) => (
				<li key={todo.id} onClick={() => onTodoListClick(todo.id)}>
					{todo.title}
				</li>
			))}
		</div>
	);
}

export default TodoList;
