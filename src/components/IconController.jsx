import { Smile } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';
import { Slider } from "@/components/ui/slider";
import ColorPickerComponent from './ColorPickerComponent';
import { UpdateStorageContext } from '@/context/UpdateStorageContext';
import IconList from './IconList';

function IconController() {
    const getDefaultValue = (key, defaultValue) => {
        const storageValue = JSON.parse(localStorage.getItem('value'));
        return storageValue ? storageValue[key] || defaultValue : defaultValue;
    };

    const [size, setSize] = useState(getDefaultValue('iconSize', 205));
    const [rotate, setRotate] = useState(getDefaultValue('iconRotate', 0));
    const [color, setColor] = useState(getDefaultValue('iconColor', 'rgba(0, 0, 0, 1)'));
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
    const [icon, setIcon] = useState(getDefaultValue('icon', 'Smile'));

    useEffect(() => {
        const updatedValue = {
            ...updateStorage,
            iconSize: size,
            iconRotate: rotate,
            iconColor: color,
            icon: icon
        };
        setUpdateStorage(updatedValue);
        localStorage.setItem('value', JSON.stringify(updatedValue));
    }, [size, rotate, color, setUpdateStorage, icon]);




    return (
        <div className='h-screen overflow-y-auto'>
            <div>
                <IconList selectedIcon={(icon) => setIcon(icon)} />
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>
                        Size <span>{size} px</span>
                    </label>
                    <Slider
                        defaultValue={[size]}
                        max={512}
                        step={1}
                        onValueChange={(event) => setSize(event[0])}
                    />
                </div>
                <div className='py-3'>
                    <label className='p-2 flex justify-between items-center'>
                        Rotate <span>{rotate} °</span>
                    </label>
                    <Slider
                        defaultValue={[rotate]}
                        max={360}
                        step={1}
                        onValueChange={(event) => setRotate(event[0])}
                    />
                </div>
                <div className='py-2'>
                    <label className='p-2 flex justify-between items-center'>
                        Icon Color
                    </label>
                    <ColorPickerComponent
                        hideController={true}
                        selectedColor={setColor}
                    />
                </div>
            </div>
        </div>
    );
}

export default IconController;
