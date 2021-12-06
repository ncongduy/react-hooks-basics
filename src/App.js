import { useEffect, useState } from 'react';
import './App.scss';
import Pagination from './components/Pagination';
import PostList from './components/PostList';

function App() {
	const [postList, setPostList] = useState([]);
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 1,
	});
	const [filters, setFilters] = useState({
		_limit: 10,
		_page: 1,
	});

	useEffect(() => {
		try {
			async function fetchData() {
				const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=${filters._limit}&_page=${filters._page}`;
				const response = await fetch(requestUrl);
				const responseJson = await response.json();
				const { data, pagination } = responseJson;

				setPostList(data);
				setPagination(pagination);
			}

			fetchData();
		} catch (error) {
			console.log('Error when get data from API', error.messeage);
		}
	}, [filters]);

	function handlePageChange(newPage) {
		setFilters({
			...filters,
			_page: newPage,
		});
	}

	return (
		<div className='app'>
			<h1>React Hooks - Todo List</h1>
			<PostList postList={postList} />
			<Pagination
				pagination={pagination}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default App;
