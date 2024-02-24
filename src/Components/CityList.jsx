/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-import-assign */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData, getOtherDays } from "../Redux/CityActions";

const CityList = () => {
  const [city, setCity] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = (sehir) => {
    const city = (sehir?.target?.value)
    dispatch(getData(city));
    dispatch(getOtherDays(city))
  };
  useEffect(() => {
    axios
      .get("http://localhost:3004/cityDetail")
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(city)
  return (
    <div className=" align-items-center d-flex flex-column">
      <div>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Şehir Giriniz..."
          className=" my-4 p-2 px-3 rounded-5"
        />
      </div>
      <div className="city-list">
        {city
          ?.filter((item) => {
            if (searchTerm === "") {
              return city;
            } else if (
              item.name.toUpperCase().includes(searchTerm.toUpperCase())
            ) {
              return city;
            }
          })
          .map((i) => (
            <button
              onClick={(sehir) => {
                handleClick(sehir), navigate("/detail");
              }}
              className="city"
              value={i?.name}
              key={i?.id}
            >
              <span className="plaka">{i?.id}</span> {i?.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default CityList;
