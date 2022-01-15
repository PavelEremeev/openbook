import React, { useState } from 'react';
import './App.css';
import Header from './Header.js'
import SearchForm from './SearchForm';
import Preloader from './Preloader';
import { openLibraryApi } from '../utils/OpenLibraryAPI'
import NotFound from './NotFound';
import NewBookList from './NewBookList';

function App() {

	const [books, setBooks] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState()

	// useEffect(() => {
	//   setLoading(true)
	//   openLibraryApi.getbooksList()
	//     .then((books) => setBooks(books))
	//     .then(() => setLoading())
	//     .catch(setError);
	// }, [])

	// function getCoverBook(searchCover) {
	//   // const searchCover = books.docs
	//   coversOpenLibraryAPI.getCoverList(searchCover)
	//     .then((books) => setBooks(books))
	//     .catch((err) => { console.log(err) })
	// }

	function handleSearchWord(searchWord) {
		setError(false)
		setLoading(true)
		setBooks(null)
		openLibraryApi.getDataList(searchWord)
			.then((books) => {
				if (books.numFound !== 0) {
					console.log(books.docs)
					setBooks(books)
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
			<SearchForm onSearchWord={handleSearchWord} searchResult={books ? books : ''} />
			<Preloader isLoading={loading} />
			<NotFound isEmpty={error} />
			{books ? <NewBookList initialBooks={books.docs} /> : ''}
		</div>
	);
}

export default App;
