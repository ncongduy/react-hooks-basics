import { useEffect, useState } from 'react';
import './App.scss';
import PostList from './components/PostList';

function App() {
	const [postList, setPostList] = useState([]);

	useEffect(() => {
		try {
			async function fetchData() {
				const requestUrl =
					'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
				const response = await fetch(requestUrl);
				const responseJson = await response.json();
				const { data } = responseJson;

				setPostList(data);
			}

			fetchData();
		} catch (error) {
			console.log('Error when get data from API', error.messeage);
		}
	}, []);

	return (
		<div className='app'>
			<h1>React Hooks - Todo List</h1>
			<PostList postList={postList} />
		</div>
	);
}

export default App;
