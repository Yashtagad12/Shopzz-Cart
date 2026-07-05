import React, { useState } from "react";
import { Header } from "../Components";

const ColorPicker = () => {
  const [color, setColor] = useState("#03C9D7");

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-xl shadow">

      <Header category="App" title="Color Picker" />

      <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-12">

        {/* Preview Box */}

        <div
          className="w-72 h-72 rounded-xl shadow-lg border transition-all duration-300"
          style={{
            backgroundColor: color,
          }}
        />

        {/* Color Controls */}

        <div className="flex flex-col items-center gap-6">

          <h2 className="text-2xl font-semibold dark:text-white">
            Pick a Color
          </h2>

          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-28 h-28 cursor-pointer border-0 rounded-lg"
          />

          <div className="text-center">

            <p className="text-gray-500 dark:text-gray-400">
              Selected Color
            </p>

            <p
              className="text-xl font-bold mt-2"
              style={{ color }}
            >
              {color.toUpperCase()}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ColorPicker;