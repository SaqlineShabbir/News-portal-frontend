import { Outlet } from "react-router-dom";
import Navigation from "../components/home/shared/Navigation";

const Main = () => {
  return (
    <div className=" max-w-6xl mx-auto px-4">
      <Navigation />
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
