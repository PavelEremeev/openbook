import React, { useState, useCallback } from 'react';

import './App.css';

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
	const [isOpen, setIsOpen] = useState(false);
	const [currentBook, setCurrentBook] = useState();


	const handleBookClick = useCallback(
		book => {
			setCurrentBook(book)
			setIsOpen(prev => !prev)
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
			<Header />
			<SearchForm onSearchWord={handleSearchWord} searchResult={books ? books : ''} />
			<Preloader isLoading={loading} />
			<NotFound isEmpty={error} />
			{books ? <NewBookList initialBooks={books.docs} onBookClick={handleBookClick} /> : ''}

			{currentBook && <Modal active={isOpen} setActive={setIsOpen}>
				<NewBook
					cover={currentBook.isbn[1]}
					title={currentBook.title}
					author={currentBook.author_name}
				/>
			</Modal>}
		</div>
	);
}

export default App;
