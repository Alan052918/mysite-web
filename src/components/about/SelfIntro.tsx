import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

class SelfIntro extends React.Component {
  markdown = raw("../../data/about.md");
  // LinkRenderer = ({ ...children }) => <Link {...children} />;

  render() {
    return (
      <div className="selfintro main-component">
        <article className="about-markdown">
          This loads a markdown file.
          {/* <ReactMarkdown source={this.markdown} /> */}
        </article>
      </div>
    );
  }
}

export default SelfIntro;
