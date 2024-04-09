import Card from "../Card";
import "./style.css";
const InfoCard = ({ heading, content }) => {
  return (
    <>
      <Card
        variant="transparent"
        cls="box mr-5 rounded-md w-44 h-28 flex flex-col items-center"
      >
        <div className="text-xl font-medium pt-4">{heading}</div>
        <div className="font-bold text-4xl text-[#00CAFF] mt-1">{content} </div>
      </Card>
    </>
  );
};
export default InfoCard;
