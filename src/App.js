import React, { useState } from 'react';
import ColorPickerText from './components/View/ColorPickerText';
import ColorPickerBackgrounde from './components/View/ColorPickerBackgrounde';
import View from './components/View/Display';
import Colors from './components/Data/colors';

import './App.css';

function App() {

    // States
    const [colorText, setColorText] = useState('');
    const [colorBackgrounde, setColorBackgrounde] = useState('');
    const [pickerTextId, setPickerTextID] = useState('');
    const [pickerBackgroundeId, setPickerBackgroundeID] = useState('');

    // Colors
    const colors = Colors.map(color => `#${color}`);

    // Handler Color Text
    const getColorText = (e) => {
        const index = e.target.id;
        const color = colors[index];

        setColorText(color);
        setPickerTextID(index);
    };

    // Handler Color Backgrounde
    const getColorBackgrounde = (e) => {
        const index = e.target.id;
        const color = colors[index];

        setColorBackgrounde(color);
        setPickerBackgroundeID(index);
    };

    return (
        <div className="App">
            <div className="title-app">
                <p>My Color Picker</p>
            </div>
            <div className="container-app">
                <div className="container-color-picker">
                    <div className="color-picker-text">
                        {colors.map((color, index) => (
                            <ColorPickerText
                                color={color}
                                index={index}
                                key={index}
                                getColorText={getColorText}
                                ID={pickerTextId}
                            />
                        ))}
                    </div>
                    <div className="color-picker-backgrounde">
                        {colors.map((color, index) => (
                            <ColorPickerBackgrounde
                                color={color}
                                index={index}
                                key={index}
                                getColorBackgrounde={getColorBackgrounde}
                                ID={pickerBackgroundeId}
                            />
                        ))}
                    </div>
                </div>
                <View
                    backgroundeColor={colorBackgrounde}
                    textColor={colorText}
                />
            </div>
        </div>
    );
}

export default App;
