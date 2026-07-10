import React from "react";
import Header from "../../Components/Header";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  FaChartBar,
  FaDollarSign,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";

const data = [
  { month: "Jan", Budget: 4200, Expense: 2800 },
  { month: "Feb", Budget: 5200, Expense: 3300 },
  { month: "Mar", Budget: 6100, Expense: 3900 },
  { month: "Apr", Budget: 7200, Expense: 4300 },
  { month: "May", Budget: 8500, Expense: 5200 },
  { month: "Jun", Budget: 9000, Expense: 6100 },
  { month: "Jul", Budget: 9800, Expense: 6700 },
  { month: "Aug", Budget: 11200, Expense: 7400 },
];

const cards = [
  {
    title: "Revenue",
    value: "$128K",
    icon: <FaDollarSign />,
    color: "bg-blue-500",
  },
  {
    title: "Orders",
    value: "3,485",
    icon: <FaShoppingBag />,
    color: "bg-green-500",
  },
  {
    title: "Customers",
    value: "1,264",
    icon: <FaUsers />,
    color: "bg-purple-500",
  },
  {
    title: "Growth",
    value: "28%",
    icon: <FaChartBar />,
    color: "bg-orange-500",
  },
];

const Stacked = () => {
  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">

      <Header
        category="Chart"
        title="Stacked Chart"
      />

      {/* Cards */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-10">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-gray-50 dark:bg-main-dark-bg rounded-xl p-5 shadow hover:shadow-lg transition"
          >

            <div
              className={`${card.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl`}
            >
              {card.icon}
            </div>

            <h2 className="mt-4 text-3xl font-bold dark:text-white">
              {card.value}
            </h2>

            <p className="text-gray-500 mt-1">
              {card.title}
            </p>

          </div>

        ))}

      </div>

      {/* Chart */}

      <div className="bg-gray-50 dark:bg-main-dark-bg rounded-2xl shadow p-6">

        <div className="flex justify-between items-center mb-6">

          <div>

            <h2 className="text-2xl font-bold dark:text-white">
              Revenue Analytics
            </h2>

            <p className="text-gray-500">
              Budget vs Expenses
            </p>

          </div>

        </div>

        <ResponsiveContainer
          width="100%"
          height={450}
        >

          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="Budget"
              stackId="a"
              fill="#3B82F6"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="Expense"
              stackId="a"
              fill="#22C55E"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Footer Stats */}

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-blue-50 rounded-xl p-6 shadow">
          <h3 className="text-gray-500">
            Total Budget
          </h3>

          <h1 className="text-4xl font-bold text-blue-600 mt-2">
            $62,400
          </h1>
        </div>

        <div className="bg-green-50 rounded-xl p-6 shadow">
          <h3 className="text-gray-500">
            Total Expenses
          </h3>

          <h1 className="text-4xl font-bold text-green-600 mt-2">
            $39,700
          </h1>
        </div>

        <div className="bg-purple-50 rounded-xl p-6 shadow">
          <h3 className="text-gray-500">
            Profit
          </h3>

          <h1 className="text-4xl font-bold text-purple-600 mt-2">
            $22,700
          </h1>
        </div>

      </div>

    </div>
  );
};

export default Stacked;