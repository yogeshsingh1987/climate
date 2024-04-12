import APP_CONST from "../../const";
import BarChart from "../commons/BarChart";

const Table = () => {
  const getRandomColor = () => {
    return APP_CONST.tableColors[
      Math.floor(Math.random() * APP_CONST.tableColors.length)
    ];
  };
  const tableBarChart = [
    { head: "Top 5 Products", val: "barTableDataProducts" },
    { head: "Top 5 Materials", val: "barTableDataMaterials" },
    { head: "Clients", val: "barTableDataClients" },
    { head: "Suppliers", val: "barTableDataSuppliers" },
  ];
  return (
    <div className="flex flex-col font-inter">
      <table className="infoTable">
        <tr>
          <th className="background">
            <div>
              <span className="bottom">Location</span>
              <span className="top">Hazard</span>
              <div className="line"></div>
            </div>
          </th>
          <th>Heat Wave</th>
          <th>Sea Level</th>
          <th>Flooding</th>
          <th>Precipitation</th>
          <th>Wild Fire</th>
        </tr>
        {new Array(5).fill(0).map((row, i) => {
          return (
            <tr>
              <td>Facility {i + 1}</td>
              <td style={{ backgroundColor: getRandomColor() }}></td>
              <td style={{ backgroundColor: getRandomColor() }}></td>
              <td style={{ backgroundColor: getRandomColor() }}></td>
              <td style={{ backgroundColor: getRandomColor() }}></td>
              <td style={{ backgroundColor: getRandomColor() }}></td>
            </tr>
          );
        })}
      </table>
      <div className="flex space-x-4 mt-4 p-2 border-solid border-2 border-[#2ED0C6]">
        {tableBarChart.map((chart) => {
          return (
            <div className="w-[200px] infoBox">
              <p className="font-semibold text-center my-4">
                {chart.head}
              </p>
              <BarChart
                indexAxis="y"
                displayLegend={false}
                displayX={false}
                displayY={true}
                displayXGrid={false}
                displayYGrid={false}
                data={APP_CONST[chart.val]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Table;
