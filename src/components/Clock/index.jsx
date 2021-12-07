import React, { useEffect, useState } from 'react';

Clock.propTypes = {};

function formatTime(date) {
	const hours = `0${date.getHours()}`.slice(-2);
	const minutes = `0${date.getMinutes()}`.slice(-2);
	const seconds = `0${date.getSeconds()}`.slice(-2);

	return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
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

	return <h2>{clockString}</h2>;
}

export default Clock;
