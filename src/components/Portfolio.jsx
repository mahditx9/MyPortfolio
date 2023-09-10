import styles, { layout, abspathStyle } from "../styles";
import { faMegaport } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrentPage from "./CurrentPage";
import { projects } from "../constants/index.js";
const ProjectBox = ({ id, name, src, description, frameWorks }) => {
  return (
    <div>
      <div className="w-full overflow-hidden rounded-[18px] project-view">
        <img src={src} alt={name} className="object-contain max-w-[400px]" />
      </div>
      <h3
        className={`${styles.heading3} py-4 px-3 capitalize text-center sm:text-start`}
      >
        {name} - {description}
      </h3>
    </div>
  );
};

function Portfolio() {
  console.log(projects);
  return (
    <section id="portfolio">
      <div className={`${layout.section} mt-20`}>
        <CurrentPage style={abspathStyle}>
          <FontAwesomeIcon icon={faMegaport} className="mr-2" />
          portfolio
        </CurrentPage>
        <h2 className={`${styles.heading2} text-center md:text-start`}>
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className={`${styles.flexCenter} flex-col p-2 gap-y-3`}>
          {projects.map((project) => (
            <ProjectBox key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
