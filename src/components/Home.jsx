import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myProjects from "../assets/myProjects.png";
import CurrentPage from "./CurrentPage";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import styles, { layout, abspathStyle } from "../styles";
function Home() {
  return (
    <section id="home">
      <div className={layout.section}>
        <CurrentPage style={abspathStyle}>
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Introduce
        </CurrentPage>
        <h2 className={`${styles.heading2} text-center md:text-start`}>
          Say Hi from <span className="text-primary tracking-[1px]">Mahdi</span>
          ,
          <br />
          Frontend Developer
        </h2>
        <p className={`${styles.paragraph} text-center md:text-start`}>
          I design and code beautifully simple things and i love what i do.
          <br />
          Just simple like that!
        </p>
        <div className={`${styles.flexCenter} flex-row-reverse w-full`}>
          <motion.img
            src={myProjects}
            animate={{
              rotate: 360,
              transition: { repeat: Infinity, duration: 2, repeatDelay: 0 },
            }}
            className="w-[150px] h-[150px] "
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <div className={`${styles.flexCenter} gap-2`}>
            <h2 className="text-primary text-[23px]">10+</h2>
            <p className={`${styles.paragraph} text-[15px] uppercase`}>
              years of
              <br className="xl:block hidden" /> experience
            </p>
          </div>
          <div className={`${styles.flexCenter} gap-2`}>
            <h2 className="text-primary text-[23px]">182+</h2>
            <p className={`${styles.paragraph} text-[15px] uppercase`}>
              projects completed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
