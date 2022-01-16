import React, { useState, useEffect } from 'react'
import './NewBookList.css'
import NewBook from './NewBook.js'

export default function NewBookList({ initialBooks }) {
	const [row, setRow] = useState(10)



	function scrollHandler(e) {
		if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
			setRow(row + 10)
		}
	}

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
		return function () {
			document.removeEventListener('scroll', scrollHandler);
		}
	}, [row])

	let elementsToRender = initialBooks.slice(0, row)

	return (
		<section className='new-book__list'>
			<div className='new-book__list-container'>
				{elementsToRender.map((book, i) =>
					<NewBook
						cover={book.isbn ? book.isbn[1] : ''}
						title={book.title}
						author={book.author_name}
						key={i}>
					</NewBook>)}
			</div>
		</section>
	)
}