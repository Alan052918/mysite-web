import Education from "./Education";
import Internship from "./Internship";
import Research from "./Research";
import Skills from "./Skills";

const Resume = () => (
  <div className="resume main-component">
    <Education />
    <Internship />
    <Research />
    <Skills />
  </div>
);

export default Resume;
