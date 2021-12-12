import React, { useState } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';
import Preloader from './Preloader';
import { openLibraryApi } from '../utils/OpenLibraryAPI'
import NotFound from './NotFound';
import NewBookList from './NewBookList';

function App() {

	const [data, setData] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState()

	// useEffect(() => {
	//   setLoading(true)
	//   openLibraryApi.getDataList()
	//     .then((data) => setData(data))
	//     .then(() => setLoading())
	//     .catch(setError);
	// }, [])

	// function getCoverBook(searchCover) {
	//   // const searchCover = data.docs
	//   coversOpenLibraryAPI.getCoverList(searchCover)
	//     .then((data) => setData(data))
	//     .catch((err) => { console.log(err) })
	// }

	function handleSearchWord(searchWord) {
		setError(false)
		setLoading(true)
		setData(null)
		openLibraryApi.getDataList(searchWord)
			.then((data) => {
				if (data.numFound !== 0) {
					console.log(data.docs)
					setData(data)
					setLoading(false)
				} else {
					setLoading(false)
					setError(true)
				}
			})
			.catch((err) => {
				setLoading(false)
				setError(true)
				console.log(err)
			})
	}

	return (
		<div className="App">
			<Header />
			<SearchForm onSearchWord={handleSearchWord} searchResult={data ? data : ''}></SearchForm>
			<Preloader isLoading={loading}></Preloader>
			<NotFound isEmpty={error}></NotFound>
			{data ? <NewBookList initialBooks={data.docs}></NewBookList> : ''}
		</div>
	);
}

export default App;
