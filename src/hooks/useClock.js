import { useEffect, useState } from 'react';

function formatTime(date) {
	const hours = `0${date.getHours()}`.slice(-2);
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const seconds = `0${date.getSeconds()}`.slice(-2);

	return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
	const [clockString, setClockString] = useState('');

	useEffect(() => {
		const clockInterval = setInterval(() => {
			const now = new Date();
			const timeString = formatTime(now);
			setClockString(timeString);
		}, 1000);

		return () => {
			clearInterval(clockInterval);
		};
	}, []);

	return { clockString };
}

export default useClock;
