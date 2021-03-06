import Main from "../components/Main";
import Greeting from "../components/about/Greeting";
import SelfIntro from "../components/about/SelfIntro";
import Footer from "../components/Footer";

const About = () => {
  return (
    <Main title="about" description="about">
      <div className="about">
        <Greeting />
        <SelfIntro />
        <Footer />
      </div>
    </Main>
  );
};

export default About;
