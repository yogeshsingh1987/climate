import { useState } from "react";
import Tile from "../commons/Tile";
import ScenarioIcon from "../../SVGs/scenario.svg";

import CrossIcon from "../../SVGs/cross.svg";
import Modal from "../commons/Modal";
import "./style.css";

const activeFilterObject = {
  Scenario: false,
  Hazard: false,
  Analysis: false,
  Library: false,
};
const filterObject = [
  { name: "Scenario", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Hazard", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Analysis", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Library", value: "0", minTime: "1900", maxTime: "2100" },
];
const filterObjectsList = [
  { name: "Scenario", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Hazard", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Analysis", value: "0", minTime: "1900", maxTime: "2100" },
  { name: "Library", value: "0", minTime: "1900", maxTime: "2100" },
];

const FilterBar = () => {
  const [filterList, setFilterList] = useState([]);
  const [activeFilter, setActiveFilter] = useState(activeFilterObject);

  const [fileterCollection, setFilterCollection] = useState([
    ...filterObjectsList,
  ]);

  const handleActiveFilter = () => {
    let ls = [];
    let tempList = [...fileterCollection];
    for (let i = 0; i < tempList.length; i++) {
      if (tempList[i].value != 0) {
        const { name, value, minTime, maxTime } = tempList[i];
        let obj = {
          filterName: name,
          filerData: value,
          time: "Time",
          timeRange: minTime + "-" + maxTime,
        };
        ls.push(obj);
      }
    }
    setFilterList(ls);
  };

  const handleClearFilter = () => {
    setFilterList([]);
    let ls = [];
    for (let i = 0; i < filterObject.length; i++) {
      ls.push({ ...filterObject[i] });
    }
    setFilterCollection(ls);
    setActiveFilter({ ...activeFilterObject });
  };

  const handleModal = (name, val) => {
    let obj = { ...activeFilterObject };
    obj[name] = val;
    setActiveFilter(obj);
  };

  return (
    <>
      <div className="flex text-white px-9 pt-4 p-4 text-base font-medium justify-between items-center">
        <section data-component="LeftSection" className="flex items-center">
          {filterList.map((data, index) => {
            return (
              <div className="flex pr-4" key={index}>
                <span className="font-semibold">
                  {data.filterName}: {data.filerData}
                </span>
                <span className="mx-2">|</span>
                <span className="font-normal">
                  {data.time}: {data.timeRange}
                </span>
              </div>
            );
          })}
          {filterList.length > 0 && (
            <div className="clear-filter flex items-center justify-around">
              <p>Clear Filter</p>
              <img
                src={CrossIcon}
                alt="CrossIcon"
                height="16px"
                width="16px"
                onClick={handleClearFilter}
              />
            </div>
          )}
        </section>
        <section data-component="RightSection" className="flex items-center">
          {/* <div className="font-normal text-sm">Filter By</div> */}
          <div className="flex flex-col items-end">
            <Tile
              name="Filter By"
              Icon={ScenarioIcon}
              onClick={() => handleModal("Scenario", !activeFilter.Scenario)}
              selected={activeFilter.Scenario}
            />
            <Modal
              name="Scenario"
              show={activeFilter.Scenario}
              setShowModal={() =>
                handleModal("Scenario", !activeFilter.Scenario)
              }
              handleActiveFilter={handleActiveFilter}
              clearFilter={handleClearFilter}
              filterCollection={fileterCollection}
              setFilterCollection={setFilterCollection}
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default FilterBar;
