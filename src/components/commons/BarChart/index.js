import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const BarChart = ({
  indexAxis,
  displayLegend,
  displayX,
  displayY,
  displayXGrid,
  displayYGrid,
  data,
}) => {
  const options = {
    indexAxis,
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: displayLegend,
      },
    },
    scales: {
      x: {
        display: displayX,
        grid: {
          display: displayXGrid,
        },
      },
      y: {
        display: displayY,
        grid: {
          display: displayYGrid,
        },
      },
    },
  };
  return <Bar options={options} data={data} />;
};
export default BarChart;
