import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState('');

  function handleTodoFormChange(evt) {
    setValue(evt.target.value);
  }

  function handleTodoFormSubmit(evt) {
    evt.preventDefault();

    if (!onSubmit) return;

    const valueSubmit = {
      title: value,
    };
    onSubmit(valueSubmit);
    setValue('')
  }

  return (
    <form onSubmit={handleTodoFormSubmit}>
      <input
        type='text'
        value={value}
        onChange={handleTodoFormChange} />
    </form>
  );
}

export default TodoForm;
