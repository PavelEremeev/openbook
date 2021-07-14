import React from 'react'
import './NewBook.css'

export default function NewBook({ title, author }) {
    return (
        <section className='new-book'>
            <div className='new-book__container'>
                <div className='new-book__cover'></div>
                <h4 className='new-book__title'>{title}</h4>
                <h6 className='new-book__author'>{author}</h6>
            </div>
        </section>
    )
}