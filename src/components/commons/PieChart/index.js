import { Pie } from 'react-chartjs-2';
const PieChart = ({data, displayLegend}) => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: displayLegend
            
          },
        }
      };
    return <Pie options={options} data={data} />;
}
export default PieChart