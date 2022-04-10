import React from "react";

const ProjectCard = () => <div className="project">This is a project.</div>;

class Dashboard extends React.Component {
  renderProjectCard() {
    return <ProjectCard />;
  }

  render() {
    return (
      <div className="dashboard main-component">
        This is the project dashboard.
      </div>
    );
  }
}

export default Dashboard;
