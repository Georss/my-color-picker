import React from 'react';

const View = ({ backgroundeColor, textColor }) => (
    <div className="container-view" style={{ backgroundColor: backgroundeColor }}>
        <h1 style={{ color: textColor }}>Main title</h1>
        <h4 style={{ color: textColor }}>Subtitle</h4>
    </div>
);

export default View;
