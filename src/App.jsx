import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import IconController from './components/IconController';
import BackgroundController from './components/BackgroundController';
import LogoPreview from './components/LogoPreview';
import { UpdateStorageContext } from './context/UpdateStorageContext';

function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();

  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <>
        <Header DownloadIcon={setDownloadIcon} />
        <div className='w-64 fixed top-16'>
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className='ml-64 mt-16 grid grid-cols-1 md:grid-cols-6'>
          <div className='md:col-span-2 border h-screen shadow-sm p-5'>
            {selectedIndex === 0 ? <IconController /> : <BackgroundController />}
          </div>
          <div className='md:col-span-3 pt-3'>
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
          <div className='bg-blue-300 pt-3'>
            Ads Banner
          </div>
        </div>
      </>
    </UpdateStorageContext.Provider>
  );
}

export default App;
