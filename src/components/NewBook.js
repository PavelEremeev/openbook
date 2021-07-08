import React from 'react'

export default function NewBook({ }) {
    return (
        <section className='new-book'>
            <div className='new-book__container'>
                <img className='new-book__cover'></img>
                <h4 className='new-book__title'>Название</h4>
                <h6 className='new-book__author'>Автор</h6>
            </div>
        </section>
    )
}