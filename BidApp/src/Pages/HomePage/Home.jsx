import BiddingMadness from "../../components/HomeComponents/BiddingMadness";

import ContactForm from "../../components/HomeComponents/ContactForm";
import FeaturedCards from "../../components/HomeComponents/FeaturedCards";
import Hero from "../../components/HomeComponents/Hero";
import MeetCards from "../../components/HomeComponents/MeetCards";
import Partners from "../../components/HomeComponents/Partners";
import Question from "../../components/HomeComponents/Question";
import LatestAuctions from "../../components/HomeComponents/latestAuctions";

const Home = () => {
  return (
    <div>
      <Hero />
  <LatestAuctions></LatestAuctions>
      <Question />
      <FeaturedCards />
      <MeetCards />
      <Partners />
      <BiddingMadness />
      <ContactForm />
    </div>
  );
};

export default Home;
