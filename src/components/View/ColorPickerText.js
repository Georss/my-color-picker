import React from 'react';
import './ColorPicker.css';

const ColorPickerText = ({ color, index, getColorText }) => (
    <div
        className="box-color-picker"
        style={{ backgroundColor: color }}
        onClick={getColorText}
        id={index}
    />
);

export default ColorPickerText;
