import React from 'react';
import useMagicBox from '../../hooks/useMagicBox';
import './styles.scss';

MagicBox.propTypes = {};

function MagicBox(props) {
	const color = useMagicBox();

	return <div className='magic-box' style={{ backgroundColor: color }}></div>;
}

export default MagicBox;
