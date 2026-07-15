import React from "react";
import {
  ResponsiveContainer,
  LineChart as ReChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ComposedChart,
} from "recharts";

import { lineCustomSeries } from "../../data/dummy";
import Header from "../Header";

const LineChartComponent = () => {
  const chartData = lineCustomSeries[0].dataSource.map((item, index) => ({
    month: item.x,
    sales: item.y,
    profit: lineCustomSeries[1]
      ? lineCustomSeries[1].dataSource[index]?.y
      : null,
  }));

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-lg p-6">

      <div className="mb-8">
        <Header
          category="Chart"
          title="Line Chart"
        />
      </div>

      <ResponsiveContainer width="100%" height={450}>
        <ComposedChart
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 10,
          }}
        >
          <defs>
            <linearGradient id="blueArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="greenArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22C55E" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#e5e7eb"
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 13 }}
          />

          <YAxis tick={{ fontSize: 13 }} />

          <Tooltip />

          <Legend />

          <Area
            type="monotone"
            dataKey="sales"
            fill="url(#blueArea)"
            stroke="none"
          />

          {chartData[0]?.profit !== null && (
            <Area
              type="monotone"
              dataKey="profit"
              fill="url(#greenArea)"
              stroke="none"
            />
          )}

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3B82F6"
            strokeWidth={4}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
            animationDuration={1500}
          />

          {chartData[0]?.profit !== null && (
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#22C55E"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
              animationDuration={1800}
            />
          )}
        </ComposedChart>
      </ResponsiveContainer>

    </div>
  );
};

export default LineChartComponent;