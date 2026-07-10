import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

import { lineCustomSeries } from "../../data/dummy";
import { Header } from "../../Components";

const BarChartComponent = () => {
  // Convert Syncfusion Data
  const chartData = lineCustomSeries[0].dataSource.map((item, index) => ({
    month: item.x,
    sales: item.y,
    profit: lineCustomSeries[1]
      ? lineCustomSeries[1].dataSource[index]?.y
      : null,
  }));

  const salesColors = [
    "#3B82F6",
    "#2563EB",
    "#60A5FA",
    "#1D4ED8",
    "#93C5FD",
    "#3B82F6",
    "#2563EB",
  ];

  const profitColors = [
    "#22C55E",
    "#16A34A",
    "#4ADE80",
    "#15803D",
    "#86EFAC",
    "#22C55E",
    "#16A34A",
  ];

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-lg p-6">

      {/* Header */}

      <div className="mb-8">
        <Header
          category="Chart"
          title="Bar Chart"
        />
      </div>

      <ResponsiveContainer width="100%" height={430}>
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip
            cursor={{ fill: "#f3f4f6" }}
          />

          <Legend />

          <Bar
            dataKey="sales"
            name="Sales"
            radius={[8, 8, 0, 0]}
            animationDuration={1500}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`sales-${index}`}
                fill={salesColors[index % salesColors.length]}
              />
            ))}
          </Bar>

          {chartData[0]?.profit !== null && (
            <Bar
              dataKey="profit"
              name="Profit"
              radius={[8, 8, 0, 0]}
              animationDuration={1800}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`profit-${index}`}
                  fill={profitColors[index % profitColors.length]}
                />
              ))}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default BarChartComponent;