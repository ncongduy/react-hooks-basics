import React from 'react';
import useClock from '../../hooks/useClock';

Clock.propTypes = {};

function Clock() {
	const { clockString } = useClock();
	return <h2>{clockString}</h2>;
}

export default Clock;
