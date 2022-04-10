import Main from "../components/Main";
import Summary from "../components/home/Summary";
import Footer from "../components/Footer";

const Home = () => (
  <Main title="home" description="home">
    <div className="home">
      <Summary />
      <Footer />
    </div>
  </Main>
);

export default Home;
