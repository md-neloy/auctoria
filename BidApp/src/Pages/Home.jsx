import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Question from "../components/Question";

const Home = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
            <Navbar/>
            </div>
            <Hero/>
            <Cards/>
            <Question/>
        </div>
    );
};

export default Home;