import React, { useState } from 'react'
import './NewBookList.css'
import NewBook from './NewBook.js'

export default function NewBookList({ initialBooks }) {
    const [row, setRow] = useState(5)

    function nextRow() {
        setRow(row + 5)
    }

    let elementsToRender = initialBooks.slice(0, row)

    return (
        <section className='new-book__list'>
            <div className='new-book__list-container'>
                {elementsToRender.map((book, i) =>
                    <NewBook
                        cover={book.isbn ? book.isbn[0] || book.oclc[0] : ''}
                        title={book.title}
                        author={book.author_name}
                        key={i}>
                    </NewBook>)}
            </div>
            <button onClick={nextRow} className='new-book__button'>Показать еще</button>
        </section>
    )
}