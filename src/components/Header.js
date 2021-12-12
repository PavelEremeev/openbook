import React from 'react';
import './Header.css';
import logo from '../../src/images/favicon.ico'

export default function Header() {


	return (
		<header>
			<div className='header__container'>
				<img className='header__logo' src={logo}></img>
				<h1 className='header__text'>openbook</h1>
			</div>
		</header>
	)
}