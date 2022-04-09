import React from "react";

const Greeting = () => {
  return (
    <div className="greeting">
      <h1>Hi there, I'm Junda Ai</h1>
    </div>
  );
};

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Greeting />
      </div>
    );
  }
}

export default About;
