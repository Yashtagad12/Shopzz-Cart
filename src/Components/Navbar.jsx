import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../data/avatar.jpg';
import logo from '../assets/Screenshots/shopzz-cart-logo.png'
import Chat from './Chat';
import Cart from './Cart';
import Notification from './Notification';   // Fixed spelling
import UserProfile from './UserProfile';

import { useStateContext } from '../Context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    style={{ color }}
  >
    <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{ background: dotColor }} />
    {icon}
  </button>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, handleClick, screensize, setScreenSize, currentColor } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screensize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screensize])

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-2 md:mx-6 relative">

      {/* Menu Button - Always on Left */}
      <div className="flex justify-between mb-3 md:mb-0 md:block">
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActionMenu) => !prevActionMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />

        <img className='md:hidden w-50' src={logo} alt="logo" />
      </div>

      {/* Right Side Icons */}
      <div className="flex gap-2 ml-auto">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />

        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        <NavButton
          title="Notification"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user"
          />
          <div>
            <p className="text-gray-400 text-14">Hi, <span className="text-gray-900 font-bold">John</span></p>
          </div>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>

      {/* Render components when clicked */}
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  );
};

export default Navbar;