import React from "react";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";

class SelfIntro extends React.Component {
  about = raw("../../data/about.md");

  render() {
    return (
      <div className="selfintro main-component">
        <article className="about-markdown">
          <ReactMarkdown children={this.about} />
        </article>
      </div>
    );
  }
}

export default SelfIntro;
