import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from '../data/dummy';   // Make sure path is correct
import { useStateContext } from '../Context/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setactiveMenu, screensize,
  } = useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screensize <= 900) {
      setactiveMenu(false);
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-grat-500 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-800 dark:text-gray-500 hover:bg-light-gray dark:hover:bg-secondary-dark-bg hover:text-blue-600 dark:hover:text-black transition-colors';

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link
              to='/' onClick={handleCloseSidebar}
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-black text-white'
            >
              <SiShopware />
              <span>Shopzz Cart</span>
            </Link>

            <button
              type='button'
              onClick={() => setactiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
            >
              <MdOutlineCancel />
            </button>
          </div>

          <div className='mt-10'>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-500 m-3 mt-4 uppercase tracking-widest'>
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;