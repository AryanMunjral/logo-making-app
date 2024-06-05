import React, { useContext, useEffect, useState } from 'react'
import { Slider } from './ui/slider'
import ColorPickerComponent from './ColorPickerComponent';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';

function BackgroundController() {
    const getDefaultValue = (key, defaultValue) => {
        const storageValue = JSON.parse(localStorage.getItem('value'));
        return storageValue ? storageValue[key] || defaultValue : defaultValue;
    };
    const [rounded, setRounded] = useState(getDefaultValue('bgRounded', 0));
    const [padding, setPadding] = useState(getDefaultValue('bgPadding', 41));
    const [color, setColor] = useState(getDefaultValue('bgColor', '#675f81'));
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

    // #675f81

    useEffect(() => {
        const updatedValue = {
            ...updateStorage,
            bgRounded: rounded,
            bgPadding: padding,
            bgColor: color
        }
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue))
    })
    return (
        <div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>
                    Rounded <span>{rounded} px</span>
                </label>
                <Slider
                    defaultValue={[rounded]}
                    max={512}
                    step={1}
                    onValueChange={(event) => setRounded(event[0])}
                />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>
                    Padding <span>{padding} px</span>
                </label>
                <Slider
                    defaultValue={[padding]}
                    max={100}
                    step={1}
                    onValueChange={(event) => setPadding(event[0])}
                />
            </div>
            <div className='py-2'>
                <label className='p-2 flex justify-between items-center'>
                    Icon Color
                </label>
                <ColorPickerComponent
                    hideController={false}
                    selectedColor={setColor}
                />
            </div>
        </div>
    )
}

export default BackgroundController
