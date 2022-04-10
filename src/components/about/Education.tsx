import React from "react";

interface DegreeProps {
  school: string;
  degree: string;
  major: string;
  start_year: string;
  end_year: string;
}

const Degree = (props: DegreeProps) => (
  <div className="degree">
    <p>{props.school}</p>
    <p>{props.degree}</p>
    <p>{props.major}</p>
    <p>{props.start_year}</p>
    <p>{props.end_year}</p>
  </div>
);

class Education extends React.Component {
  renderDegree(
    school: string,
    degree: string,
    major: string,
    start_year: string,
    end_year: string
  ) {
    return (
      <Degree
        school={school}
        degree={degree}
        major={major}
        start_year={start_year}
        end_year={end_year}
      />
    );
  }

  render() {
    return (
      <div className="education">
        This is education.
        {/*{this.renderDegree("", "", "", "", "")}*/}
        {/*{this.renderDegree("", "", "", "", "")}*/}
      </div>
    );
  }
}

export default Education;
