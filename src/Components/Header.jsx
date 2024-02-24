import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>Hava Durumu</h2>
      <div className="butonlar">
        <NavLink className={"btn btn-light"} to={"/"}>
          Şehir Listesi
        </NavLink>
        <NavLink className={"btn btn-light"} to={"/map"}>
          Harita Görünümü
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
