import { Bar } from 'react-chartjs-2';
const StackedBarChart = ({data, indexAxis, displayLegend, displayX, displayY, displayXGrid, displayYGrid,}) => {
    const options = {
        indexAxis,
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
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
                display: displayXGrid
            },
            stacked: true,
          },
          y: {
            stacked: true,
            display: displayY,
              grid: {
                display: displayYGrid
            }
          },
        },
    };
    return <Bar options={options} data={data} />;
}
export default StackedBarChart