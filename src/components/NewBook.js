import React from 'react'
import './NewBook.css'

const link = 'http://covers.openlibrary.org/b/isbn/'
const link2 = 'http://covers.openlibrary.org/b/oclc/'


export default function NewBook({ title, author, cover, data }) {
    return (
        <section className='new-book'>
            <div className='new-book__container'>
                <img className='new-book__cover' src={`${link}${cover}-M.jpg` || `${link2}${cover}-M.jpg`} alt={title}></img>
                <h4 className='new-book__title'>{title}</h4>
                <h6 className='new-book__author'>{author}</h6>
            </div>
        </section>
    )
}