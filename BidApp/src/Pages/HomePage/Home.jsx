import BiddingMadness from "../../components/HomeComponents/BiddingMadness";

import ContactForm from "../../components/HomeComponents/ContactForm";
import FeaturedCards from "../../components/HomeComponents/FeaturedCards";
import Footer from "../../components/HomeComponents/Footer";
import Hero from "../../components/HomeComponents/Hero";
import MeetCards from "../../components/HomeComponents/MeetCards";
import Navbar from "../../components/HomeComponents/Navbar";
import Partners from "../../components/HomeComponents/Partners";
import Question from "../../components/HomeComponents/Question";
import LatestAuctions from "../../components/HomeComponents/latestAuctions";

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-md">
        <Navbar />
      </div>
      <Hero />
  <LatestAuctions></LatestAuctions>
      <Question />
      <FeaturedCards />
      <MeetCards />
      <Partners />
      <BiddingMadness />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
