import BiddingMadness from "../components/BiddingMadness";
import Cards from "../components/Cards";
import ContactForm from "../components/ContactForm";
import FeaturedCards from "../components/FeaturedCards";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MeetCards from "../components/MeetCards";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
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