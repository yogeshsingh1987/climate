import DownArrow from "../../../SVGs/downArrow.svg";
import "./style.css";
const Tile = ({ name = "scenario", Icon, onClick, selected }) => {
  return (
    <div
      className={`tile-container h-8 w-32 bg-[#ececec] cursor-pointer ml-5`}
      onClick={onClick}
    >
      <div className="mt-1 flex justify-around items-center">
        <img src={Icon} alt="Scenario" />
        <div className="text-black">{name}</div>
        <img src={DownArrow} alt="DownArro" />
      </div>
    </div>
  );
};
export default Tile;
