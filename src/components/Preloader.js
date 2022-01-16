import React from 'react';
import './Preloader.css';

export default function Preloader({ isLoading }) {
	return (
		<section className={isLoading ? 'preloader preloader_opened' : 'preloader'}>
			<i className='preloader__circle'></i>
			<p className='preloader__text'>Идет поиск книг...</p>
		</section>
	);
}