import React, { useState } from 'react'
import './SearchForm.css'

export default function SearchForm({ onSearchWord, searchResult }) {

	const [searchWord, setSearchWord] = useState()
	function handleSearchWord(evt) {
		setSearchWord(evt.target.value);
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		onSearchWord(
			searchWord)
	}

	return (
		<section className='search-form'>
			<div className='search-form__background'></div>
			<form onSubmit={handleSubmit} className='search-form__form'>
				<h2 className='search-form__title'>Найти то, что под рукой...</h2>
				<p className='search-form__subtitle'>ищите и читайте любимые книги вместе с <b>openbook</b></p>
				<input className='search-form__input'
					placeholder='Введите название книги'
					required
					onChange={handleSearchWord}
				>
				</input>
				<button className='search-form__button'>Искать</button>
				{searchResult
					? <h4 className='search-form__results-numb'>По вашему запросу найдено {searchResult.numFound} книг</h4>
					: ''
				}
			</form>
		</section>
	)
}