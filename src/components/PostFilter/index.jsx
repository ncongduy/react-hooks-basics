import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

PostFilter.propTypes = {
	onSubmit: PropTypes.func,
};

PostFilter.defaultProps = {
	onSubmit: null,
};

function PostFilter(props) {
	const [value, setValue] = useState('');
	const { onSubmit } = props;
	const inputChange = useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
	}

	function handlePostFilterChange(e) {
		const valueInput = e.target.value;
		setValue(valueInput);

		if (!onSubmit) return;

		if (inputChange.current) {
			clearTimeout(inputChange.current);
		}

		inputChange.current = setTimeout(() => {
			onSubmit(valueInput);
		}, 300);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={value}
					onChange={handlePostFilterChange}
				/>
			</form>
		</div>
	);
}

export default PostFilter;
