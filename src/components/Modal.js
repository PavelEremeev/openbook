import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import './Modal.css';


export default function Modal({ children }) {

	const { active, setActive } = useContext(DataContext)


	function handlePopupToggle() {
		setActive(prev => !prev)
	}

	return (
		<div className=
			{active
				? 'modal modal_active'
				: 'modal'}
			onClick={handlePopupToggle}>
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