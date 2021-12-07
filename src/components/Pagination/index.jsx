import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Pagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
	onPageChange: null,
};

function Pagination(props) {
	const { pagination, onPageChange } = props;
	const { _page, _limit, _totalRows } = pagination;
	const maxPage = Math.ceil(_totalRows / _limit);

	function handleClick(newPage) {
		if (!onPageChange) return;
		onPageChange(newPage);
	}

	return (
		<div className='pagination'>
			<button
				disabled={_page <= 1}
				onClick={() => handleClick(_page - 1)}
			>
				Prev
			</button>

			<span>{_page}</span>

			<button
				disabled={_page >= maxPage}
				onClick={() => handleClick(_page + 1)}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
