import React from 'react';
import './ColorPicker.css';

const ColorPickerBackgrounde = ({ color, index, getColorBackgrounde, ID }) => {

    const activeBorder = ID == index ? 'border-active' : '';

    return (
        <div
            className={`box-color-picker ${activeBorder}`}
            style={{ backgroundColor: color }}
            onClick={getColorBackgrounde}
            id={index}
        />
    );
};

export default ColorPickerBackgrounde;

