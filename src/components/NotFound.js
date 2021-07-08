import React from 'react';
import './NotFound.css';
import notFound from '../images/not-found.svg'

export default function NotFound({ isEmpty }) {
    return (
        <section className={isEmpty ? `not-found not-found_opened` : `not-found`}>
            <img className="not-found__image" src={notFound} alt="изображение лупы"></img>
            <p className="not-found__title">Ничего не найдено</p>
            <p className="not-found__subtitle">К сожалению, по вашему запросу ничего не найдено.</p>
        </section>
    );
}