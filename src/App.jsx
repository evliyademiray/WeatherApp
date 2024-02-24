import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityList from "./Components/CityList";
import HaritaTr from "./Components/HaritaTr";
import Header from "./Components/Header";
import DetailCity from "./Components/DetailCity";

const App = () => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <BrowserRouter>
        <div className=" text-center my-2">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<CityList />} />
          <Route path="/map" element={<HaritaTr />} />
          <Route path="/detail" element={<DetailCity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
