import React from "react";

import ReactJsLogo from "../../data/images/react-js.png";
import SpringBootLogo from "../../data/images/spring-boot.svg";

interface RepoProps {
  id: string;
  description: string;
  link: string;
  icon: string;
}

const Repo = (props: RepoProps) => (
  <div className="repo" id={props.id}>
    <a href={props.link} target="_blank" rel="noreferrer">
      <p>{props.description}</p>
      <img src={props.icon} alt="" />
    </a>
  </div>
);

class Repos extends React.Component {
  renderRepo(id: string, description: string, link: string, icon: string) {
    return <Repo id={id} description={description} link={link} icon={icon} />;
  }

  render() {
    return (
      <div className="repos">
        {this.renderRepo(
          "repo-left",
          "mysite-web",
          "https://github.com/Alan052918/mysite-web",
          ReactJsLogo
        )}
        {this.renderRepo(
          "repo-right",
          "mysite-services",
          "https://github.com/Alan052918/mysite-services",
          SpringBootLogo
        )}
      </div>
    );
  }
}

export default Repos;
