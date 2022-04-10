import Main from "../components/Main";
import Dashboard from "../components/devs/Dashboard";
import Footer from "../components/Footer";

const Devs = () => (
  <Main title="devs" description="devs">
    <div className="devs">
      <Dashboard />
      <Footer />
    </div>
  </Main>
);

export default Devs;
