import { Doughnut } from 'react-chartjs-2';
const DoughnutChart = ({data, displayLegend}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: displayLegend
          },
        }
      };
    return <Doughnut options={options} data={data} />;
}
export default DoughnutChart;