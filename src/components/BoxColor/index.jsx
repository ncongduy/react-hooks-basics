import React, { useState } from 'react';
import './styles.scss';

function randomColor() {
	const colorArray = ['deeppink', 'green', 'yellow', 'black', 'blue'];
	const randomIndex = Math.trunc(Math.random() * colorArray.length);

	return colorArray[randomIndex];
}

function BoxColor() {
	const [color, setColor] = useState(() => {
		return localStorage.getItem('color_box') || 'blue';
	});

	function handleBoxColorClick() {
		const newColor = randomColor();
		setColor(newColor);

		localStorage.setItem('color_box', newColor);
	}

	return (
		<div
			className='box-color'
			style={{ backgroundColor: color }}
			onClick={handleBoxColorClick}
		></div>
	);
}

export default BoxColor;
