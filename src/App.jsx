import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

import { Navbar, Footer, Sidebar, ThemeSettings } from './Components';
import {
  Ecommerce, Orders, Calender, Employee, Stacked, Pyramid, Customers, Kanban,
  Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line
} from './Pages';
import { useStateContext } from './Context/ContextProvider';

function App() {

  const { activeMenu } = useStateContext();

  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

  return (
    <>
      <div className='flex relative dark:bg-main-dark-bg'>

        {/* Floating Settings Button */}
        <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
          <button
            type='button'
            onClick={() => setIsThemeSettingsOpen(true)}
            className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-grey text-white transition-all duration-300'
            style={{ background: '#3b82f6', borderRadius: '50%' }}
          >
            <FiSettings className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar */}
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar />
          </div>
        )}

        {/* Main Content Area */}
        <div className={`dark:bg-main-bg bg-main-bg min-h-screen w-full 
          ${activeMenu ? 'md:ml-72' : 'md:ml-0'}`}>
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          {/* Page Routes */}
          <div>
            <Routes>
              <Route path='/' element={<Ecommerce />} />
              <Route path='/ecommerce' element={<Ecommerce />} />

              {/* Pages */}
              <Route path='/orders' element={<Orders />} />
              <Route path='/employees' element={<Employee />} />
              <Route path='/customers' element={<Customers />} />

              {/* Apps */}
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='/calender' element={<Calender />} />
              <Route path='/color-picker' element={<ColorPicker />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>

        {isThemeSettingsOpen && (
          <ThemeSettings
            onClose={() => setIsThemeSettingsOpen(false)}   // Proper close handler
          />
        )}

      </div>
    </>
  );
}

export default App;