import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineCancel } from "react-icons/md";

import { links } from "../data/dummy";
import { useStateContext } from "../Context/ContextProvider";

const Sidebar = () => {
  const {
    activeMenu,
    setActiveMenu,
    screenSize,
    currentColor,
  } = useStateContext();

  <h1 style={{ color: currentColor }}>
    Theme Test
  </h1>

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-white";

  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-700 dark:hover:bg-gray-300 transition-all";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">

      {activeMenu && (
        <>
          {/* Logo */}

          <div className="flex items-center justify-between">

            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="flex items-center gap-3 ml-3 mt-4 text-2xl font-bold dark:text-white"
            >
              <FaShoppingCart
                style={{ color: currentColor }}
              />

              <span className="text-2xl font-bold text-gray-800 dark:text-black">
                Shopzz Cart
              </span>

            </Link>

            <button
              type="button"
              onClick={() => setActiveMenu(false)}
              className="text-xl rounded-full p-3 hover:bg-gray-100 mt-4 block md:hidden"
            >
              <MdOutlineCancel />
            </button>

          </div>

          {/* Links */}

          <div className="mt-10">

            {links.map((item) => (

              <div key={item.title}>

                <p className="text-gray-500 uppercase text-sm tracking-widest m-3">
                  {item.title}
                </p>

                {item.links.map((link) => (

                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive
                        ? currentColor
                        : "",
                      color: isActive
                        ? "#fff"
                        : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <span className="text-xl">
                      {link.icon}
                    </span>

                    <span className="capitalize">
                      {link.name}
                    </span>

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