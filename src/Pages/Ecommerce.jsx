import React from 'react';
import { earningData, SparklineAreaData } from '../data/dummy';
import WelcomeBg from '../data/welcome-bg.svg';
import Button from '../Components/Button';
import Stacked from '../Components/Charts/Stacked';
import SparkLine from '../Components/Charts/SparkLine';

const Ecommerce = () => {
  return (
    <div className="mt-12 px-4 py-4 md:px-6 md:py-4">

      {/* Welcome Banner - Full Width */}
      <div className="relative flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 rounded-[10px] bg-black/20 text-white md:h-100">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-[10px]"
          style={{ backgroundImage: `url(${WelcomeBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 rounded-[10px]" />

        <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 md:py-0 text-white">
          <p className="text-4xl md:text-5xl font-bold">Good Morning, John Doe!</p>
          <p className="mt-3 text-lg md:text-xl opacity-90">Here's what's happening with your business today.</p>

          <div className="mt-8">
            <Button
              color="white"
              bgColor="#3b82f6"
              text="Download Report"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
      </div>

      {/* Earning Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {earningData.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-secondary-dark-bg p-6 rounded-3xl shadow-sm"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-3xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
            >
              {item.icon}
            </button>

            <div className="mt-6">
              <p className="text-3xl font-semibold">{item.amount}</p>
              <p className={`text-sm mt-1 ${item.pcColor.includes('green') ? 'text-green-500' : 'text-red-500'}`}>
                {item.percentage}
              </p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mt-3">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Revenue Updates Section */}
      <div className="bg-white dark:bg-secondary-dark-bg rounded-3xl p-4 md:p-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <p className="font-semibold text-2xl">Revenue Updates</p>

          <div className="flex gap-6 text-sm">
            <p className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
              Expense
            </p>
            <p className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
              Budget
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          <div className="lg:col-span-3 border-r border-gray-200 dark:border-gray-700 pr-8">
            <div className="space-y-10">
              <div>
                <p className="text-4xl font-semibold">$93,438</p>
                <p className="text-blue-500 mt-1">Budget</p>
              </div>
              <div>
                <p className="text-4xl font-semibold">$48,438</p>
                <p className="text-green-500 mt-1">Expense</p>
              </div>
            </div>

            <div className="mt-12">
              <SparkLine data={SparklineAreaData} />
            </div>


          </div>

          <div className="lg:col-span-4">
            <Stacked width="100%" height={420} />
                                  <div className="mt-8">
              <Button
                color="white"
                bgColor="#00c951"
                text="Download Report"
                borderRadius="10px"
                size="md"

              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ecommerce;