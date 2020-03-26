import React from 'react';
import './ColorPicker.css';

const ColorPickerText = ({ color, index, getColorText, ID }) => {

    const activeBorder = ID === index.toString() ? 'border-active' : '';

    return (
        <div
            className={`box-color-picker ${activeBorder}`}
            style={{ backgroundColor: color }}
            onClick={getColorText}
            id={index}
        />
    );
};

export default ColorPickerText;
