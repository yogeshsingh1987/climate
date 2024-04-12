import DoughnutChart from "../commons/DoughnutChart";
import Card from "../commons/Card";
import APP_CONST from "../../const";
import NumScore from "../NumScore";
import BarChart from "../commons/BarChart";
import MapSvg from "../../SVGs/map.svg";
import { Bar } from "react-chartjs-2";
import "./style.css";
import FilterBar from "../FilterBar";
const tableBarChart = [
  { head: "Top 5 Disruptions", val: "barTableDataTopProducts" },
  { head: "Top 5 Products", val: "barTableDataTopProducts" },
  { head: "Top 5 Actions", val: "barTableDataRegions" },
  { head: "Supplier Driven Impact", val: "barTableDataClients" },
  { head: "Client Driven Impact", val: "barTableDataClients" },
];
const tableData = [
  {
    code: "RM",
    name: "Raw Material",
    YTD: "$1200",
    forcast: "$1350",
    confindence: "High",
    backgroundColor: "#05737A",
    ytdBackground: "#8A48BD",
  },
  {
    code: "UT",
    name: "Upstream Transportation",
    YTD: "$122",
    forcast: "$243",
    confindence: "Medium",
    backgroundColor: "#0F9FA9",
    ytdBackground: "#DBA008",
  },
  {
    code: "PD",
    name: "Production",
    YTD: "$122",
    forcast: "$325",
    confindence: "Medium",
    backgroundColor: "#13C3CE",
    ytdBackground: "#818181",
  },
  {
    code: "SD",
    name: "Storage & Distribution",
    YTD: "$623",
    forcast: "$465",
    confindence: "Low",
    backgroundColor: "#08F0FF",
    ytdBackground: "#0094FF",
  },
  {
    code: "DT",
    name: "Downstream Transportation",
    YTD: "$154",
    forcast: "$795",
    confindence: "High",
    backgroundColor: "#9BF9FF",
    ytdBackground: "#8A48BD",
  },
  {
    code: "SS",
    name: "Sell & service",
    YTD: "$456",
    forcast: "$764",
    confindence: "Medium",
    backgroundColor: "#D7FDFF",
    ytdBackground: "#8A48BD",
  },
];
const option = {
  indexAxis: "y",
  aspectRatio: 3.7,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    datalabels: {
      color: "pink",
      labels: {
        value: ["RM", "UT"],
        title: {
          color: "blue",
        },
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },
};
const data = {
  labels: [""],
  datasets: [
    {
      label: "RM",
      data: [31],
      backgroundColor: "#05737A",
    },
    {
      label: "UT",
      data: [17],
      backgroundColor: "#0F9FA9",
    },
    {
      label: "PD",
      data: [18],
      backgroundColor: "#13C3CE",
    },
    {
      label: "SD",
      data: [24],
      backgroundColor: "#08F0FF",
    },
    {
      label: "DT",
      data: [7],
      backgroundColor: "#9BF9FF",
    },
    {
      label: "SS",
      data: [3],
      backgroundColor: "#D7FDFF",
    },
  ],
};

const optionsDays = {
  aspectRatio: 4.1,
  lineWidht: 9,
  stepSize: 5,
  layout: {
    height: 200,
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },
  },
};

const Product = () => {
  return (
    <>
    <div className="grid grid-cols-1 gap-8">
      <div className="w-full">
        <FilterBar />
      </div>
      <div className="py-5 w-full 4444">
        <Card variant="dark" cls="w-full flex flex-row">
          <div className="w-[150px] mr-5">
          <p className="21 font-bold mb-7 mt-4">
              # of facilities
            </p>
            <DoughnutChart
              data={APP_CONST.doughnutData}
              displayLegend={false}
            ></DoughnutChart>
            
          </div>
        
            <div className="w-[280px]">
              <Card variant="transparent" cls="w-full">
                <div>
                  <p className="21 font-medium">Total Revenue</p>
                  <p className="text-[28px] font-bold text-[#00CAFF]">$215M</p>
                </div>
              </Card>
              <Card variant="transparent" cls="mt-8 w-full">
                <div>
                  <p className="21 font-medium">Total COGS</p>
                  <p className="text-[28px] font-bold text-[#00CAFF]">$152M</p>
                </div>
              </Card>
            

            {/* <div>
              <StackedBarChart
                data={APP_CONST.stackedBarData}
                indexAxis="y"
                displayLegend={false}
                displayX={false}
                displayY={true}
                displayXGrid={false}
                displayYGrid={true}
              ></StackedBarChart>
            </div> */}
          </div>
          <div className="mx-3">
            <div className="flex flex-row h-24 w-[600px] border-2 border-b-0 border-[#FFFFFF]">
              <div className="flex flex-col w-[294px] border-r-2 border-[#FFFFFF] justify-center items-center">
                <div className="p-2">Value Chain</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="justify-center pb-7">Avg Cost/Unit</div>
                <div className="flex flex-row">
                  <div className="border-t-2 border-r-2 border-[#FFFFFF] p-2 w-[100px] flex flex-col items-center justify-center">
                    YTD
                  </div>
                  <div className="border-t-2 border-r-2 border-[#FFFFFF] w-[152px] flex flex-col items-center justify-center">
                    12 mos forcast
                  </div>
                  <div className="border-t-2 border-[#FFFFFF] w-[100px] flex flex-col items-center justify-center">
                    Confindence
                  </div>
                </div>
              </div>
            </div>
            <table className=" w-[600px] productInfoBox">
              {tableData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td
                      style={{
                        backgroundColor: val.backgroundColor,
                        color: "black",
                        width: "30px",
                      }}
                    >
                      {val.code}
                    </td>
                    <td className="w-[200px]">{val.name}</td>
                    <td
                      style={{
                        backgroundColor: val.ytdBackground,
                        width: "100px",
                      }}
                    >
                      {val.YTD}
                    </td>
                    <td className="w-[150px]">{val.forcast}</td>
                    <td className="w-[100px]">{val.confindence}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="w-[280px]">
            <Card variant="transparent" cls="w-full">
              <NumScore num="$165M" text1="YTD Cost of Impact" />
              <p>Average Cost/Distruption : $6M</p>
            </Card>
            <Card variant="transparent" cls="mt-8 w-full">
              <NumScore num="$195M" text1="Loss & Damage" />
              <p>5 Year Avg : $6M</p>
            </Card>
          </div>
        </Card>
      </div>
      <div className="py-5 w-full 555">
        <div>
          <div className="flex flex-row">
            <div className="mr-5">
              <img src={MapSvg} alt="MAP" className="" />
              <div className="flex flex-row justify-around mt-4">
                <div>
                  High <div className="h-3 w-20 bg-[#FFA500] rounded-r"></div>
                </div>
                <div>
                  Medium <div className="h-3 w-20 bg-[#8e7ebc] rounded-r"></div>
                </div>
                <div>
                  Low <div className="h-3 w-20 bg-[#2778ea] rounded-r"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row border-solid border-2 border-[#FFFFFF]">
                {/* <div className="w-[300px] border-solid border-2 border-[#2ED0C6]">
                  <p className="text-[18px] font-semibold text-center my-4">
                    Top 5 Disruptions 44
                  </p>
                  <BarChart
                    indexAxis="y"
                    displayLegend={false}
                    displayX={false}
                    displayY={true}
                    displayXGrid={false}
                    displayYGrid={false}
                    data={APP_CONST.barTableDisruptions}
                  />
                </div> */}
                <div className="w-full border-solid border-2 border-[#FFFFFF]">
                <div className="pt-2">
              <Bar data={data} options={option} height="100px" />
            </div>
                  <div className="flex flex-row h-[200px]">
                    <p className="rotated font-semibold text-center my-4 px-4">
                      Days To Recover
                    </p>
                    <Bar
                      indexAxis="x"
                      data={APP_CONST.barDataFrequency}
                      options={optionsDays}
                    />
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 mt-4 p-2 border-solid border-2 border-[#2ED0C6]">
                {tableBarChart.map((chart) => {
                  return (
                    <div className="w-[250px] infoBox">
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
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Product;
