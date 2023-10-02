import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons";
import CurrentPage from "./CurrentPage";
import ResumeCard from "./ResumeCard";
import styles, { layout, abspathStyle } from "../styles";
const skills = [{ id: 1, title: "HTML5", level: 90 }];

function Resume() {
  return (
    <section id="my-skills">
      <div className={`${layout.section} mt-20`}>
        <CurrentPage style={abspathStyle}>
          <FontAwesomeIcon icon={faConnectdevelop} className="mr-2" />
          my skills
        </CurrentPage>
        <h2 className={`${styles.heading2} text-center md:text-start`}>
          My <span className="text-primary">Advantages</span>
        </h2>
        <div className="flex flex-wrap gap-x-1 gap-y-3 justify-center items-center ">
          {Array.from({ length: 6 }, (_, i) => (
            <ResumeCard key={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
