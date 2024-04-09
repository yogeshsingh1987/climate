import Card from "../commons/Card";
import RiskScore from "../RiskScore";
import NumScore from "../NumScore";
import BarCard from "../BarCard";
import BarChart from "../commons/BarChart";
import APP_CONST from "../../const";
import DoughnutChart from "../commons/DoughnutChart";
import MapSvg from "../../SVGs/map.svg";
import Table from "../Table";
import FilterBar from "../FilterBar";
import Map from "../commons/Map";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="px-28">
          <FilterBar />
        </div>
        <div className="px-28 min-w-[1900px] m-auto">
          <Card variant="dark" cls="w-full">
            <div className="flex flex-row">
              <Card variant="light" cls="mr-5 w-[250px] h-[298px] shrink-0">
                <RiskScore
                  num="54"
                  text1="Climate Risk Score"
                  text2="Physical Risk: 82"
                  text3="Transition Risk: 48"
                  hrLine={true}
                />
              </Card>
              <Card variant="light" cls="mr-5 w-[250px] h-[298px] shrink-0">
                <RiskScore
                  num="32"
                  text1="Resilience Score"
                  text2="Target by 2030: 43"
                  hrLine={true}
                />
              </Card>
              <div>
                <div className="flex flex-row">
                  <Card variant="transparent" cls="mr-5 w-[252px]">
                    <NumScore num="$4.5B" text1="Total Revenue" />
                  </Card>
                  <Card variant="transparent" cls="mr-5 w-[252px]">
                    <NumScore num="$2.8B" text1="Total CA-VAR" text2="/year" />
                  </Card>
                  <Card variant="transparent" cls="mr-5 w-[252px]">
                    <NumScore
                      num="$295M"
                      text1="Resilience Investment"
                      text2="Avg/year"
                    />
                  </Card>
                  <Card variant="transparent" cls="mr-5 w-[252px]">
                    <NumScore
                      num="$295M"
                      text1="CA-VAR Adjustment"
                      text2="Avg/year"
                    />
                  </Card>
                </div>
                <div className="mt-8 flex flex-row">
                  <BarCard text="Revenue by BU" cls="mr-5 min-w-[253px]">
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
                  <BarCard text="Res-Investment by BU" cls="mr-5 min-w-[253px]">
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
                  <BarCard text="Total CA-VAR by BU" cls="mr-5 min-w-[253px]">
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
                  <Card variant="transparent" cls="mr-5 min-w-[250px]">
                    <NumScore num="$4.5B" text1="Total Revenue" />
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="px-28 min-w-[1900px] m-auto">
          <Card variant="dark" cls="w-full">
            <div className="flex flex-row justify-between">
            <div className="w-[245px] mr-5">
                <p className="text-[24px] font-bold mb-7 text-center">
                  Exposure Analysis
                </p>
                <DoughnutChart
                  data={APP_CONST.doughnutData}
                  displayLegend={false}
                ></DoughnutChart>
                <p className="text-[24px] font-bold mb-7 text-center">
                  # of facilities 
                </p>
              </div>
              <div className="mr-5">
                <img src={MapSvg} alt="MAP" className="" />
                {/* <Map /> */}
              </div>
              <Table />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
