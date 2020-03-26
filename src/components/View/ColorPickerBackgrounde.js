import React from 'react';
import './ColorPicker.css';

const ColorPickerBackgrounde = ({ color, index, getColorBackgrounde }) => (
    <div
        className="box-color-picker"
        style={{ backgroundColor: color }}
        onClick={getColorBackgrounde}
        id={index}
    />
);

export default ColorPickerBackgrounde;
