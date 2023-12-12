import News from "../../components/home/news/News";
import PerfomanceTraining from "../../components/home/PerfomanceTraining";
import LatestArticles from "../../components/home/latest-articles/articles/LatestArticles";
import Footer from "../../components/home/shared/Footer";
import Navigation from "../../components/home/shared/Navigation";
import NavaddCard from "../../components/home/shared/NavaddCard";
import Banner from "../../components/home/banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <News />
            <PerfomanceTraining />
            <NavaddCard></NavaddCard>
            <LatestArticles></LatestArticles>
            
        </div>
    )
}

export default Home;