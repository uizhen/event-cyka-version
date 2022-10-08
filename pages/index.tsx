import type { NextPage } from "next";
import Masthead from "../components/indexpage/mastead";
import Navbar from "../components/indexpage/navbar";
import Grid from "../components/indexpage/grid";
import Information from "../components/indexpage/information";
import CircleSection from "../components/indexpage/circlesection";
import ParaSection from "../components/indexpage/parasection";
import TeamSection from "../components/indexpage/teamsection";
import LogoSlider from "../components/indexpage/logoslider";
import MapSection from "../components/indexpage/mapsection";
import Footer from "../components/indexpage/footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <Grid />
      <Information />
      <CircleSection />
      <ParaSection />
      <TeamSection />
      <LogoSlider />
      <MapSection />
      <Footer />
    </>
  );
};

export default Home;
