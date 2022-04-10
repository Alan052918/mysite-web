import Main from "../components/Main";
import Summary from "../components/home/Summary";
import Footer from "../components/Footer";
import Repos from "../components/home/Repos";

const Home = () => (
  <Main title="home" description="home">
    <div className="home">
      <Summary />
      <Repos />
      <Footer />
    </div>
  </Main>
);

export default Home;
