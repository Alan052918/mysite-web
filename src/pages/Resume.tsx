import Main from "../components/Main";
import Education from "../components/resume/Education";
import Internship from "../components/resume/Internship";
import Research from "../components/resume/Research";
import Skills from "../components/resume/Skills";
import Footer from "../components/Footer";

const Resume = () => (
  <Main title="resume" description="resume">
    <div className="resume">
      <div className="resume-title main-component">
        <h1>Resume</h1>
      </div>
      <Education />
      <Internship />
      <Research />
      <Skills />
      <Footer />
    </div>
  </Main>
);

export default Resume;
