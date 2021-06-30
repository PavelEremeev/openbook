import { func } from 'prop-types'
import React from 'react'
import './SearchForm.css'

export default function SearchForm({ }) {

    return (
        <section className='search-form'>
            <div className='search-form__background'></div>
            <form className='search-form__form'>
                <h2 className='search-form__title'>Найти то, что под рукой...</h2>
                <p className='search-form__subtitle'>ищите и читайте любимые книги вместе с <b>openbook</b></p>
                <input className='search-form__input'
                    placeholder='Введите название книги'
                    required
                >
                </input>
                <button className='search-form__button'>Искать</button>
            </form>

        </section>
    )
}