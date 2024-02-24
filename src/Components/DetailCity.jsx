/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unsafe-optional-chaining */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DetailCity = () => {
  const [city, setCity] = useState([]);
  const state = useSelector((store) => store.CityReducer);

  const { data } = state?.data;
  const other = state?.OtherDays?.data;

  const a = data?.weather[0].description;
  const b = a?.split(" ").map((i) => i[0].toUpperCase() + i.slice(1, i.length));
  const firstLetterCapitalized = b?.join(" ");

  const time = data?.sys.sunrise;
  const newTime = new Date(1000 * time).toLocaleString().slice(11, 16);
  const sunSetTime = data?.sys.sunset;
  const newSunSetTime = new Date(1000 * sunSetTime)
    .toLocaleString()
    .slice(11, 16);

  useEffect(() => {
    axios
      .get("http://localhost:3004/cityDetail")
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  }, []);

  let besGun = [];

  const nn = city?.filter((i) => i?.name === data?.name);
  other?.list?.map((i) => {
    if (i?.dt_txt?.includes("15:00")) {
      besGun.push(i);
    }
  });
  return (
    <div className="card">
      <div>
        <span className="sehirAdi">
          {data?.name}-{data?.sys?.country}
        </span>
      </div>
      <div className=" alt2 d-flex justify-content-between">
        <div className="first ">
          <div className="derece">{data?.main.temp.toFixed(1)}°C</div>
          <div className=" text-warning">{firstLetterCapitalized}</div>
          <div>
            <img
              className="cityIcon"
              src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
              alt={firstLetterCapitalized}
            />
          </div>
        </div>
        <div className="first">
          <div>
            Rüzgar: <span className=" text-dark">{data?.wind.speed} m/s</span>{" "}
          </div>
          <div>
            Nem: <span className=" text-dark">{data?.main.humidity}%</span>
          </div>
          <div>
            Gün doğuş: <span className=" text-dark">{newTime}</span>
          </div>
          <div>
            Gün batış: <span className=" text-dark">{newSunSetTime}</span>
          </div>
          <div>
            Enlem:
            <span className=" text-dark"> {nn[0]?.longitude}</span>
          </div>
          <div>
            Boylam:
            <span className=" text-dark"> {nn[0]?.latitude}</span>
          </div>
          <div>
            Nüfus: <span className=" text-dark">{nn[0]?.population}</span>
          </div>
          <div>
            Bölge: <span className=" text-dark">{nn[0]?.region}</span>
          </div>
        </div>
      </div>
      <div className="digerGunler">
        {besGun.map((i) => (
          <span key={i.dt} className="digerGunCard">
            <div className="digerGunCardPerItem">
              <div className=" text-dark">{i?.dt_txt?.slice(5, 10)}</div>
              <div className=" text-light">{(i?.main.temp).toFixed(1)}°C</div>
              <div>
                <img
                  width={40}
                  src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                />
              </div>
              <div className=" text-warning mx-4">
                {firstLetterCapitalized}
              </div>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};

export default DetailCity;
