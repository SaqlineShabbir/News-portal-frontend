import News from "../../components/home/news/News";
import PerfomanceTraining from "../../components/home/PerfomanceTraining";
import LatestArticles from "../../components/home/latest-articles/articles/LatestArticles";
import Footer from "../../components/home/shared/Footer";
import Navigation from "../../components/home/shared/Navigation";


const Home = () => {
    return (
        <div>
            
            <News />
            <PerfomanceTraining />
            <LatestArticles></LatestArticles>
            
        </div>
    )
}

export default Home;