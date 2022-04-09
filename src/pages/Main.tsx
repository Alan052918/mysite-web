import { ReactElement } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Footer from "../components/Footer";
import Header from "../components/Header";

interface MainProps {
  title: string;
  description: string;
  children: ReactElement;
}

const Main = (props: MainProps) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Junda Ai" defaultTitle="Junda Ai" defer={false}>

    </Helmet>
    <div className="main">
      <Header />
      <div className="main-body">{props.children}</div>
      <Footer />
    </div>
  </HelmetProvider>
);

Main.defaultProps = {
  title: null,
  description: "Junda Ai's website.",
  children: null,
};

export default Main;
