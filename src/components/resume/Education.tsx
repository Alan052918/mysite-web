import degrees from "../../data/resume/degrees";

interface DegreeProps {
  school: string;
  degree: string;
  major: string;
  start_time: string;
  end_time: string;
}

const Degree = (props: DegreeProps) => (
  <div className="degree">
    <p>{props.school}</p>
    <p>{props.degree}</p>
    <p>{props.major}</p>
    <p>{props.start_time}</p>
    <p>{props.end_time}</p>
  </div>
);

const Education = () => (
  <div className="education main-component">
    {degrees.map((d) => (
      <Degree
        school={d.school}
        degree={d.degree}
        major={d.major}
        start_time={d.start_time}
        end_time={d.end_time}
      />
    ))}
  </div>
);

export default Education;
