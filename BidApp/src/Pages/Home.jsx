import BiddingMadness from "../components/HomeComponents/BiddingMadness";
import Cards from "../components/HomeComponents/Cards";
import ContactForm from "../components/HomeComponents/ContactForm";
import FeaturedCards from "../components/HomeComponents/FeaturedCards";
import Footer from "../components/HomeComponents/Footer";
import Hero from "../components/HomeComponents/Hero";
import MeetCards from "../components/HomeComponents/MeetCards";
import Navbar from "../components/HomeComponents/Navbar";
import Partners from "../components/HomeComponents/Partners";
import Question from "../components/HomeComponents/Question";


const Home = () => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
            <Navbar/>
            </div>
            <Hero/>
            <Cards/>
            <Question/>
            <FeaturedCards/>
            <MeetCards/>
            <Partners/>
            <BiddingMadness/>
            <ContactForm/>
            <Footer/>
        </div>
    );
};

export default Home;