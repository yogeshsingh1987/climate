import Card from "../commons/Card";
import BarCard from "../BarCard";
import BarChart from "../commons/BarChart";
import APP_CONST from "../../const";
import Map from "../../assets/map2.png";
import DoughnutChart from "../commons/DoughnutChart";
import "./style.css";
import InfoCard from "../commons/InfoCard";
import FilterBar from "../FilterBar";
import { Bar } from "react-chartjs-2";
import RiskScore from "../RiskScore";

const tableBarChart = [
  { head: "Top 5 Hazards", val: "barTableDataHazards" },
  { head: "Top 5 Regions", val: "barTableDataRegions" },
  { head: "Top 5 Products", val: "barTableDataProducts" },
  { head: "Influence to Product", val: "barTableDataProducts" },
];
const options = {
  aspectRatio: 3.0,
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
const P62AX = () => {
  return (
    <>
      <div className="px-28">
        <FilterBar />
      </div>
      <div className="px-28 py-5">
        <Card variant="dark" cls="w-full p-8">
          <div className="flex flex-row min-h-[300px]">
            <Card variant="light" cls="mr-5">
              <RiskScore
                num="64"
                text1="Climate Risk Score"
                // text2="Physical Risk: 82"
                text3="Criticality: High"
                hrLine={true}
              />
            </Card>
            <Card variant="light" cls="mr-5">
              <RiskScore
                num="31"
                text1="Resilience Score"
                // text2="Physical Risk: 82"
                text3="Target By 2030: 45"
                hrLine={true}
              />
            </Card>

            <div>
              <div className="flex flex-row ml-8">
                <InfoCard heading="Total Spend" content="$62M" />
                <Card
                  variant="transparent"
                  cls="box mr-5 rounded-md h-28 flex flex-col items-center"
                >
                  <div className="text-xl font-medium pt-4">Revenue Impact</div>
                  <div className="flex flex-row mt-1">
                    <p className="font-bold text-4xl text-[#00CAFF] ">
                      {" "}
                      $575M{" "}
                    </p>
                    <p className="mt-2">/year</p>
                  </div>
                </Card>
                <InfoCard heading="Supplier Posture" content="Single Source" />
                <InfoCard heading="Cost to Replace Supplier" content="$135M" />
              </div>
              <div className="mt-8 flex flex-row ml-8">
                <div className="w-[270px]">
                  <BarCard text="Revenue by BU" cls="mr-[10px]">
                    <BarChart
                      indexAxis="y"
                      displayLegend={false}
                      displayX={false}
                      displayY={true}
                      displayXGrid={false}
                      displayYGrid={false}
                      data={APP_CONST.barData}
                    />
                  </BarCard>
                </div>
                <div className="w-[270px]">
                  <BarCard text="Res-Investment by BU" cls="mr-[10px]">
                    <BarChart
                      indexAxis="y"
                      displayLegend={false}
                      displayX={false}
                      displayY={true}
                      displayXGrid={false}
                      displayYGrid={false}
                      data={APP_CONST.barData}
                    />
                  </BarCard>
                </div>
                <div className="w-[270px]">
                  <BarCard
                    text="Total CA-VAR by BU"
                    cls="mr-[10px] text-xl font-bold"
                  >
                    <BarChart
                      indexAxis="y"
                      displayLegend={false}
                      displayX={false}
                      displayY={true}
                      displayXGrid={false}
                      displayYGrid={false}
                      data={APP_CONST.barData}
                    />
                  </BarCard>
                </div>
                <Card
                  variant="transparent"
                  cls="box rounded-md w-44 h-28 flex flex-col items-center ml-2"
                >
                  <div className="text-xl font-medium pt-4">
                    YTD Loss & Damage
                  </div>
                  <div className=" flex flex-row mt-1">
                    <p className="font-bold text-4xl text-[#00CAFF] ">
                      {" "}
                      $575M{" "}
                    </p>
                    <p className="mt-2 text-sm">5 year avg</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="px-28 py-5">
        <Card variant="dark" cls="flex flex-row p-8 w-full">
          <div className="flex flex-row">
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
            <div>
              <div className="flex flex-row ">
                <div className="flex flex-col w-[280px] justify-center items-center">
                  <p className="text-[14px] font-bold text-center mt-2">
                    # of Categories
                  </p>
                  <div className="mt-8 h-52">
                    <DoughnutChart
                      data={APP_CONST.doughnutDataRegions}
                      displayLegend={false}
                    ></DoughnutChart>
                  </div>
                </div>
                <div className="bar ml-8">
                  <p className="text-[14px] font-bold text-center -ml-4 mt-4 ">
                    Revenue Impact By Category
                  </p>
                  <Bar
                    indexAxis="x"
                    data={APP_CONST.barDataRevenueFrequency}
                    options={options}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                {tableBarChart.map((chart) => {
                  return (
                    <div className="w-[280px] border-solid border-2 border-[#76B3B3]">
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
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
export default P62AX;
