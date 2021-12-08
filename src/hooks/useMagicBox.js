import { useEffect, useRef, useState } from 'react';

useMagicBox.propTypes = {};

function randomColor(currentColor) {
	const colorList = ['tomato', 'cyan', 'crimson'];
	const currentIndex = colorList.indexOf(currentColor);
	let newIndex = currentIndex;

	while (newIndex === currentIndex) {
		newIndex = Math.trunc(Math.random() * colorList.length);
	}

	return colorList[newIndex];
}

function useMagicBox() {
	const [color, setColor] = useState('transparent');
	const colorRef = useRef('transparent');

	useEffect(() => {
		const colorInterval = setInterval(() => {
			const currentColor = colorRef.current;
			const newColor = randomColor(currentColor);
			setColor(newColor);
			colorRef.current = newColor;
			console.log(newColor);
		}, 1500);

		return () => {
			clearInterval(colorInterval);
		};
	}, []);

	return color;
}

export default useMagicBox;
