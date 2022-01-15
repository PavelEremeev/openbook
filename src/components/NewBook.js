import React, { useState } from 'react'
import Modal from './Modal'
import './NewBook.css'



// хардкод в рамках тестирования.

const link = 'http://covers.openlibrary.org/b/isbn/'


export default function NewBook({ title, author, cover, data }) {

	const [active, setActive] = useState(false);

	return (
		<section className='new-book'>
			<div className='new-book__container'>
				<img className='new-book__cover' src={`${link}${cover}-M.jpg`} alt={title}></img>
				<h4 className='new-book__title'>{title}</h4>
				<h6 className='new-book__author'>{author}</h6>
			</div>
			<button onClick={() => setActive(true)}>Поподробнее</button>
			<Modal active={active} setActive={setActive}>
				<div className='new-book__container'>
					<img className='new-book__cover' src={`${link}${cover}-M.jpg`} alt={title}></img>
					<h4 className='new-book__title'>{title}</h4>
					<h6 className='new-book__author'>{author}</h6>
				</div>
			</Modal>
		</section>

	)
}