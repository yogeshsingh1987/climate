import { useRef, useEffect } from "react";
import MultiRangeSlider from "../InputRange";
import "./style.css";

const ModalComponent = ({
  name,
  currentIndex,
  filterCollection,
  setFilterCollection,
  setDisabled,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    let div = ref.current;
    console.log(div);
  }, []);

  return (
    <>
      <div className="mt-12 ">
        <div className="mb-3">
          <label className="label mt-12 mx-7 pb-3" html-for="pet-select">
            {name}
          </label>
        </div>
        <div className="w-52">
          <select
            className="select mx-7 px-2 w-56"
            name="selectedFruit"
            onChange={(e) => {
              let tempFilterList = filterCollection;
              tempFilterList[currentIndex].value = e.target.value;
              setFilterCollection([...tempFilterList]);
              setDisabled(false);
            }}
          >
            <option value="">--select--</option>
            <option value="RCP-1.9">RCP 1.9</option>
            <option value="RCP-2.6">RCP 2.6</option>
            <option value="RCP-3.4">RCP 3.4</option>
            <option value="RCP-4.5">RCP 4.5</option>
            <option value="RCP-6.0">RCP 6.0</option>
            <option value="RCP-8.5">RCP 8.5</option>
          </select>
        </div>
        <div className="mt-7 mb-3 w-52">
          <label className="label mt-6 mx-7 mb-3" for="time">
            Time
          </label>
        </div>
        <div className="range-text flex justify-between mx-10 mb-4">
          <div className="multi-range-slider-container ">
            <MultiRangeSlider
              // labels={[startVal, endVal]}
              min="1900"
              max="2100"
              minValue={filterCollection[currentIndex].minTime}
              maxValue={filterCollection[currentIndex].maxTime}
              step="2"
              minCaption={filterCollection[currentIndex].minTim}
              maxCaption={filterCollection[currentIndex].maxTime}
              onInput={(e) => {
                let tempFilterList = filterCollection;
                tempFilterList[currentIndex].minTime = e.minValue;
                tempFilterList[currentIndex].maxTime = e.maxValue;
              }}
            />
          </div>
        </div>
      </div>
      <div className="overlay hidden"></div>
    </>
  );
};
export default ModalComponent;
