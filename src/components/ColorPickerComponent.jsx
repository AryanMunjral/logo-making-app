import React, { useState } from 'react';
import ColorPicker from 'react-best-gradient-color-picker';

function ColorPickerComponent({ hideController = false, selectedColor }) {
    const [color, setColor] = useState('rgba(74,59,184,1)');
    return (
        <div>
            <ColorPicker
                value={color}
                onChange={(e) => {
                    setColor(e);
                    selectedColor(e);
                }}
                hideControls={hideController}
                hideEyeDrop
                hideAdvancedSliders
                hideColorGuide
                hideInputType
            />
        </div>
    );
}

export default ColorPickerComponent;
