import React from 'react'
import './NewBook.css'

import { LINK } from '../utils/constants'





export default function NewBook({ title, author, cover, onClick }) {


	return (
		<section className='new-book' onClick={onClick}>
			<div className='new-book__container'>
				<img className='new-book__cover' src={`${LINK}${cover}-M.jpg`} alt={title}></img>
				<h4 className='new-book__title'>{title}</h4>
				<h6 className='new-book__author'>{author}</h6>
			</div>
		</section>
	)
}