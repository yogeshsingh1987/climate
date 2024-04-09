import { useRef, useEffect, useState } from "react";
import CrossModalIcon from "../../../SVGs/crossModal.svg";
import "./style.css";
import ModalComponent from "../ModalComponent";

const Modal = ({
  name,
  handleActiveFilter,
  show = false,
  setShowModal,
  clearFilter,
  filterCollection,
  setFilterCollection,
}) => {
  const ref = useRef(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    let div = ref.current;
    console.log(div);
  }, []);

  return (
    show && (
      <>
        <section className="modal mt-10 items-center">
          <div
            className="flex h-6 absolute right-2 top-3"
            onClick={setShowModal}
          >
            <img
              src={CrossModalIcon}
              alt="CrossIcon"
              height="22px"
              width="22px"
            />
          </div>
          <div className="text-black absolute mt-4 left-6 font-bold text-xl">
            Filter By
          </div>
          <div className="mt-12 absolute w-full h-0.5 bg-[#AEADAD] mx-6"></div>
          <div className="flex flex-row mt-4">
            {["Scenario", "Hazard", "Analysis", "Library"].map(
              (item, index) => {
                return (
                  <div key={index} className="divide-y divide-gray-400">
                    <ModalComponent
                      currentIndex={index}
                      name={item}
                      filterCollection={filterCollection}
                      setFilterCollection={setFilterCollection}
                      setDisabled={setDisabled}
                    />
                    <hr className="mt-12 mx-6 color-[#AEADAD]"></hr>
                  </div>
                );
              }
            )}
          </div>
          <footer className="flex w-72 mx-7 mt-6">
            <button
              className={`btn w-36 ${
                disabled ? "bg-[#87B6FD] text-white" : "bg-[#094EB6] text-white"
              } `}
              onClick={handleActiveFilter}
              disabled={disabled}
            >
              Submit
            </button>
            <button
              className="btn w-36 reset-button bg-white ml-5 text-black"
              onClick={clearFilter}
            >
              Reset
            </button>
          </footer>
        </section>

        <div className="overlay hidden"></div>
      </>
    )
  );
};
export default Modal;
