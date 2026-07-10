import React from "react";
import { Header } from "../../Components";
import PieChartComponent from "../../Components/Charts/PieChart";

const Pie = () => {
  return (
    <div className="m-2 md:m-10 p-5 md:p-8 bg-white dark:bg-secondary-dark-bg rounded-2xl shadow">



      <div className="mt-8">

        <PieChartComponent />

      </div>

    </div>
  );
};

export default Pie;