import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";
import Main from "./Main";

const Greeting = () => (
  <div className="greeting">
    <h1>Hi there, I"m Junda Ai</h1>
  </div>
);

class SelfIntro extends React.Component {
  markdown = raw("../data/about.md");
  // LinkRenderer = ({ ...children }) => <Link {...children} />;

  render() {
    return (
      <div className="selfintro">
        <article className="about-markdown">
          {/* <ReactMarkdown source={this.markdown} /> */}
        </article>
      </div>
    );
  }
}

const About = () => {
  return (
    <Main title="about" description="about">
      <div className="about">
        <p>This is about.</p>
        <Greeting />
        <SelfIntro />
      </div>
    </Main>
  );
};

export default About;
