import News from "../../components/home/News";
import PerfomanceTraining from "../../components/home/PerfomanceTraining";
import LatestArticles from "../../components/home/latest-articles/articles/LatestArticles";
import Footer from "../../components/home/shared/Footer";


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