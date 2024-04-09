import Card from "../commons/Card";
import BarChart from "../commons/BarChart";
import APP_CONST from "../../const";
import Map from "../../assets/map2.png";
import DoughnutChart from "../commons/DoughnutChart";
import "./style.css";
import InfoCard from "../commons/InfoCard";
import { Bar } from "react-chartjs-2";
import PieChart from "../commons/PieChart";
import FilterBar from "../FilterBar";

const tableBarChart = [
  { head: "Top 5 Hazards", val: "barTableDataHazards" },
  { head: "Top 5 Regions", val: "barTableDataRegions" },
  { head: "Top 5 Materials", val: "barTableDataProducts" },
  { head: "Top 5 Suppliers", val: "barTableDataSuppliers" },
];
const data = [
  {
    supplier: "Tier1",
    categories: 19,
    high: "10",
    medium: "7",
    low: "3",
    baseline: "78",
    average: "89",
    trend: "70",
    avgImpact: "12",
    avgCostSupplier: "$12M",
  },
  {
    supplier: "Tier2",
    categories: 19,
    high: "11",
    medium: "4",
    low: "8",
    baseline: "97",
    average: "118",
    trend: "71",
    avgImpact: "18",
    avgCostSupplier: "$5M",
  },
  {
    supplier: "Tier3",
    categories: 25,
    high: "5",
    medium: "5",
    low: "12",
    baseline: "38",
    average: "78",
    trend: "75",
    avgImpact: "8",
    avgCostSupplier: "$3M",
  },
  {
    supplier: "Tier4",
    categories: 19,
    high: "4",
    medium: "3",
    low: "32",
    baseline: "29",
    average: "45",
    trend: "60",
    avgImpact: "19",
    avgCostSupplier: "$2M",
  },
  {
    supplier: "Tier5",
    categories: 25,
    high: "2",
    medium: "4",
    low: "9",
    baseline: "60",
    average: "54",
    trend: "30",
    avgImpact: "10",
    avgCostSupplier: "$5M",
  },
];
const SupplierChain = () => {
  const options = {
    aspectRatio: 2.5,
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
  const optionsClimate = {
    aspectRatio: 1.5,
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
  return (
    <>
      <div className="px-28">
        <FilterBar />
      </div>
      <div className="px-28 py-5 min-w-1900px]">
        <Card variant="dark" cls="w-full">
          <div className="flex flex-row">
            <div>
              <div className="flex flex-row">
                <InfoCard heading="YTD Total Revenue" content="$215M" />
                <InfoCard heading="YTD Total COGS" content="$152" />
              </div>
              <div className="w-[500px] flex flex-col items-center text-l">
                <div className="mb-2 mt-2">Monthly Cogs by Supplier</div>
                <Bar
                  indexAxis="x"
                  data={APP_CONST.barDataMonthly}
                  options={options}
                />
              </div>
            </div>
            <div className="w-[360px]">
              <p className="text-[18px] ml-16 font-bold mb-12">
                Spend By Tiers
              </p>
              <div className="flex flex-row items-center w-[260px] h-[300px]">
                <PieChart
                  data={APP_CONST.doughnutDataTiers}
                  displayLegend={false}
                />
                <div className="ml-6">
                  <p className="pb-2 w-[50px]">Tier 1</p>
                  <p className="pb-2 w-[50px]">Tier 2</p>
                  <p className="pb-2 w-[50px]">Tier 3</p>
                  <p className="pb-2 w-[50px]">Tier 4</p>
                  <p className="pb-2 w-[50px]">Tier 5</p>
                </div>
              </div>
            </div>
            <div className="ml-8 flex flex-col items-center w-[500px]">
              <div className="mb-16 text-l font-medium">
                Cost of Climate Disruptions to B2B
              </div>

              <Bar
                indexAxis="x"
                data={APP_CONST.barTableDataTiers}
                options={optionsClimate}
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="px-28 py-5 min-w-[1900px]">
        <Card variant="dark" cls="flex flex-row pb-4">
          <div className="flex flex-row">
            <div>          
              <div className="w-[150px]  mr-5">
                <p className="text-[18px] font-bold text-center -ml-4 mb-12">
                  # of Suppliers
                </p>
                <DoughnutChart
                  data={APP_CONST.doughnutDataRegions}
                  displayLegend={false}
                ></DoughnutChart>
              </div>
              <div className="mr-5 mt-6">
                <img src={Map} alt="MAPImage" />
                <div className="flex flex-row justify-around mt-8">
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
            </div>
            <div>
              <div className="flex space-x-4 mt-4 p-2 border-solid border-2 border-[#2ED0C6]">
                {tableBarChart.map((chart) => {
                  return (
                    <div className="w-[300px] infoBox">
                      <p className="text-[18px] font-semibold text-center my-4">
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
              <div className="flex flex-row mt-8">
                <div className="table-head table-col flex flex-row items-center justify-center border-t border-[#FFFFFF] bg-[#000000]">
                  Supplier Tiers
                </div>
                <div className="table-head table-col flex flex-row items-center justify-center bg-[#000000]">
                  #of Categories
                </div>

                <div className="table-head w-[360px] bg-[#000000]">
                  <div className="h-[41px]  pt-2" >
                    Climate Risk (# of Suppliers)
                  </div>
                  <div className="flex flex-row h-[41px] w-[360px]">
                    <div className="table-col border-t border-r border-[#FFFFFF] bg-[purple] h-[38px] p-2">
                      High
                    </div>
                    <div className="table-col border-t border-r border-[#FFFFFF] bg-orange-400 h-[38px] p-2">
                      Medium
                    </div>
                    <div className="table-col border-t border-[#FFFFFF] bg-[#0ea9dd] h-[38px] p-2">
                      Low
                    </div>
                  </div>
                </div>
                <div className="table-head w-[360px] bg-[#000000]">
                  <div className="h-[41px] pt-2">Days to Recover</div>
                  <div className="flex flex-row h-[41px]">
                    <div className="table-col border-t border-r border-[#FFFFFF] p-2">
                      Baseline
                    </div>
                    <div className="table-col border-t border-r border-[#FFFFFF] p-2">
                      Average
                    </div>
                    <div className="table-col border-t border-[#FFFFFF] p-2">
                      Trend
                    </div>
                  </div>
                </div>
                <div className="table-head table-col flex flex-row items-center border-t border-[#FFFFFF] bg-[#000000]">
                  Avg. # of imapacts /year
                </div>
                <div className="table-head table-col flex flex-row items-center border-t border-[#FFFFFF] bg-[#000000]">
                  Avg. Cost to B2B per supplier
                </div>
              </div>
              <table>
                {/* <tr>
                  <th>Name</th>
                  <th><div></div></th>
                  <th>Gender</th>
                </tr> */}
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td className="table-col">{val.supplier}</td>
                      <td className="table-col">{val.categories}</td>
                      <td className="table-col">{val.high}</td>
                      <td className="table-col">{val.medium}</td>
                      <td className="table-col">{val.low}</td>
                      <td className="table-col">{val.baseline}</td>
                      <td className="table-col">{val.average}</td>
                      <td className="table-col">{val.trend}</td>
                      <td className="table-col">{val.avgImpact}</td>
                      <td className="table-col">{val.avgCostSupplier}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default SupplierChain;
