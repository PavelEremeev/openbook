import React from 'react';
import './Modal.css';


export default function Modal({ active, setActive, children }) {

	function handlePopupIsOpen() {
		setActive(false)
	}

	return (
		<div className=
			{active
				? 'modal modal_active'
				: 'modal'}
			onClick={handlePopupIsOpen}>
			<div
				className=
				{active
					? 'modal__container modal__container_active'
					: 'modal__container'}
				onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}