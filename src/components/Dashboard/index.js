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
      <div className="grid grid-cols-1 gap-8">
        <div className="w-full">
          <FilterBar />
        </div>
        <div className="w-full">
          <div className="1">
            <div className="flex flex-row gap-5 w-full">
              <Card variant="light" cls="  shrink-0">
                <RiskScore
                  num="54"
                  text1="Climate Risk Score"
                  text2="Physical Risk: 82"
                  text3="Transition Risk: 48"
                  hrLine={true}
                />
              </Card>
              <Card variant="light" cls=" shrink-0">
                <RiskScore
                  num="32"
                  text1="Resilience Score"
                  text2="Target by 2030: 43"
                  hrLine={true}
                />
              </Card>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-4 gap-5">
                  <Card variant="transparent" cls="  ">
                    <NumScore num="$4.5B" text1="Total Revenue" />
                  </Card>
                  <Card variant="transparent" cls="  ">
                    <NumScore num="$2.8B" text1="Total CA-VAR" text2="/year" />
                  </Card>
                  <Card variant="transparent" cls="  ">
                    <NumScore
                      num="$295M"
                      text1="Resilience Investment"
                      text2="Avg/year"
                    />
                  </Card>
                  <Card variant="transparent" cls=" ">
                    <NumScore
                      num="$295M"
                      text1="CA-VAR Adjustment"
                      text2="Avg/year"
                    />
                  </Card>
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <BarCard text="Revenue by BU" cls=" ">
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
                  <BarCard text="Res-Investment by BU" cls="  2323">
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
                  <BarCard text="Total CA-VAR by BU" cls="  2323">
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
                  <Card variant="transparent" cls=" ">
                    <NumScore num="$4.5B" text1="Total Revenue" />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-[25%_75%] gap-5 8888 ">
            <div className=" ">
              <img src={MapSvg} alt="MAP" className="" />
              {/* <Map /> */}
            </div>
            <div className=" sfsdf ">
              <div className="grid grid-cols-[20%_80%] gap-5 85855">
                <div className=" 222 ">
                  <div className="font-bold mb-7">
                    Exposure Analysis # of facilities
                  </div>
                  <DoughnutChart
                    data={APP_CONST.doughnutData}
                    displayLegend={false}
                  ></DoughnutChart>
                </div>
                <div className="test 222"><Table /></div>
              </div>
              <div  className="test q222">
              dfadfsdf
               
              </div>
            </div>

            
          </div>
          <div className="flex flex-row justify-between"></div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
