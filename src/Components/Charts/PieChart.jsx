import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import { lineCustomSeries } from "../../data/dummy";
import Header from "../Header";

const PieChartComponent = () => {
  // Convert Syncfusion Data
  const chartData = lineCustomSeries[0].dataSource.map((item) => ({
    name: item.x,
    value: item.y,
  }));

  const COLORS = [
    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
    "#EC4899",
    "#14B8A6",
    "#F97316",
    "#6366F1",
    "#84CC16",
    "#E11D48",
  ];

  return (
    <div className="bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-lg p-6">

      {/* Header */}

      <div className="mb-8">
        <Header
          category="Chart"
          title="Pie Chart"
        />
      </div>

      <ResponsiveContainer width="100%" height={450}>

        <PieChart>

          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={140}
            paddingAngle={3}
            dataKey="value"
            animationDuration={1500}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            height={40}
          />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default PieChartComponent;