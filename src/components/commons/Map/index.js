import { VectorMap } from "react-jvectormap";
import APP_CONST from '../../../const';


const regionStyle = {
    initial: {
      fill: "#e4e4e4",
      "fill-opacity": 0.9,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 0
    }
  };
  
  const series = {
    regions: [
      {
        values: APP_CONST.mapData,
        scale: ["#AAAAAA", "#444444"],
        normalizeFunction: "polynomial"
      }
    ]
  }
  
  const containerStyle = {
    width: "435px",
    height: "318px"
  };

const Map = () => {
    
    return (
        <VectorMap
            map={"world_mill"}
            backgroundColor="transparent"
            zoomOnScroll={false}
            containerStyle={containerStyle}
            containerClassName="map"
            regionStyle={regionStyle}
            series={series}
        />
    )
}
export default Map;