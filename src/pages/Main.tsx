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
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>
    <div className="main">
      <Header />
      <div className="main-body">
        <div className="main-body-container">
          {props.children}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  </HelmetProvider>
);

Main.defaultProps = {
  title: null,
  description: "Junda Ai's website.",
  children: null,
};

export default Main;
