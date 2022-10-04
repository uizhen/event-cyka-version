import type { NextPage } from "next";
import Masthead from "../components/indexpage/mastead";
import Navbar from "../components/indexpage/navbar";
import Grid from "../components/indexpage/grid";
import Information from "../components/indexpage/information";
import CircleSection from "../components/indexpage/circlesection";
import ParaSection from "../components/indexpage/parasection";

type Props = {
  children: React.ReactNode;
};

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <Grid />
      <Information />
      <CircleSection />
      <ParaSection />
    </>
  );
};

export default Home;
