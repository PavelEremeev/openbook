import React from 'react';
import { LINK } from '../utils/constants'

import './BookInfo.css';


export default function BookInfo({ book }) {


	return (
		<section className='book-info'>
			<img className='book-info__cover' src={`${LINK}${book.isbn ? book.isbn[1] : ''}-L.jpg`} alt={book.title}></img>
			<div className='book-info__container'>
				<h4 className='book-info__title'>Название: {book.title}</h4>
				<h4 className='book-info__title'>{book.subtitle}</h4>
				<h6 className='book-info__text'>Имя автора: {book.author_name}</h6>
				<h6 className='book-info__text'>Дата публикации: {book.first_publish_year}</h6>
				<h6 className='book-info__text'>Количество страниц: {book.number_of_pages_median}</h6>
				<h6 className='book-info__text'>Страна: {book.place}</h6>
			</div>
		</section>
	)
}