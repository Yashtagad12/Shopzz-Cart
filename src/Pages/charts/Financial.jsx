import React from "react";
import Chart from "react-apexcharts";
import Header from "../../Components/Header";

const Financial = () => {
  const options = {
    chart: {
      type: "candlestick",
      height: 450,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },

    title: {
      text: "Stock Market Performance",
      align: "left",
      style: {
        fontSize: "22px",
        fontWeight: "bold",
      },
    },

    xaxis: {
      type: "datetime",
    },

    yaxis: {
      tooltip: {
        enabled: true,
      },
    },

    theme: {
      mode: "light",
    },

    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 5,
    },
  };

  const series = [
    {
      data: [
        {
          x: new Date("2025-01-01"),
          y: [120, 135, 115, 130],
        },
        {
          x: new Date("2025-01-02"),
          y: [130, 142, 125, 138],
        },
        {
          x: new Date("2025-01-03"),
          y: [138, 150, 132, 145],
        },
        {
          x: new Date("2025-01-04"),
          y: [145, 155, 140, 148],
        },
        {
          x: new Date("2025-01-05"),
          y: [148, 160, 144, 157],
        },
        {
          x: new Date("2025-01-06"),
          y: [157, 168, 152, 161],
        },
        {
          x: new Date("2025-01-07"),
          y: [161, 172, 155, 169],
        },
        {
          x: new Date("2025-01-08"),
          y: [169, 180, 165, 176],
        },
      ],
    },
  ];

  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">
      <Header
        category="Chart"
        title="Financial Chart"
      />

      <div className="mt-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow-lg p-6">
        <Chart
          options={options}
          series={series}
          type="candlestick"
          height={450}
        />
      </div>
    </div>
  );
};

export default Financial;