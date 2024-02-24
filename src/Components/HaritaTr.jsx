/* eslint-disable no-undef */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TurkeyMap from "turkey-map-react";
import {getData} from "../Redux/CityActions";
const HaritaTr = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMapClick = (sehir) => {
    const city=sehir.name
    dispatch(getData(city));
    
  };
  return (
    <div className="main">
      <h3 className="text-danger my-4 d-flex align-items-center text-center">
        Türkiye Haritası
      </h3>
      <TurkeyMap
        hoverable={true}
        showTooltip={true}
        customStyle={{ idleColor: "#444", hoverColor: "chartreuse" }}
        onClick={(sehir) => {
          handleMapClick(sehir), navigate("/detail");
        }}
      />
    </div>
  );
};

export default HaritaTr;
