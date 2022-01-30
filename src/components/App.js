import React, { useState, useCallback } from 'react';

import './App.css';

import { DataContext } from './DataContext'
import Header from './Header.js'
import SearchForm from './SearchForm';
import Preloader from './Preloader';
import { openLibraryApi } from '../utils/OpenLibraryAPI'
import NotFound from './NotFound';
import NewBookList from './NewBookList';
import NewBook from './NewBook';
import Modal from './Modal';

function App() {

	const [books, setBooks] = useState();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState()
	const [active, setActive] = useState(false);
	const [currentBook, setCurrentBook] = useState();

	function handlePopupToggle() {
		setActive(prev => !prev)
	}

	const handleBookClick = useCallback(
		book => {
			setCurrentBook(book)
		},
		[]
	);

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
			<DataContext.Provider value={{ books, active, setActive }}>
				<Header />
				<SearchForm onSearchWord={handleSearchWord} searchResult={books ? books : ''} />
				<Preloader isLoading={loading} />
				<NotFound isEmpty={error} />
				{books ? <NewBookList initialBooks={books.docs} onBookClick={handleBookClick && handlePopupToggle} /> : ''}

				{currentBook && <Modal>
					<NewBook
						cover={currentBook.isbn ? currentBook.isbn[0] : ''}
						title={currentBook.title}
						author={currentBook.author_name}
					/>
				</Modal>}
			</DataContext.Provider>
		</div>
	);
}

export default App;
