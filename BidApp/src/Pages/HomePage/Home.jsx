import BiddingMadness from "../../components/HomeComponents/BiddingMadness";
import Cards from "../../components/HomeComponents/Cards";
import ContactForm from "../../components/HomeComponents/ContactForm";
import FeaturedCards from "../../components/HomeComponents/FeaturedCards";
import Hero from "../../components/HomeComponents/Hero";
import MeetCards from "../../components/HomeComponents/MeetCards";
import Partners from "../../components/HomeComponents/Partners";
import Question from "../../components/HomeComponents/Question";

const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
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
