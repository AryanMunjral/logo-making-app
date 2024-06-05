import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

function Header({ DownloadIcon }) {
    return (
        <div className='p-4 shadow-sm border flex justify-between items-center fixed top-0 left-0 w-full bg-white z-10'>
            <img src='/logo.svg' alt='Logo' />
            <Button className='flex gap-2 items-center' onClick={() => DownloadIcon(Date.now())}>
                <Download className='h-4 w-4' /> Download
            </Button>
        </div>
    );
}

export default Header;
