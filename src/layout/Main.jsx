import { Outlet } from "react-router-dom";
import Footer from "../components/home/shared/Footer";
import Navigation from "../components/home/shared/Navigation";


const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
}

export default Main;