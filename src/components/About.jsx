import styles, { layout, abspathStyle } from "../styles";
import CurrentPage from "./CurrentPage";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function About() {
  return (
    <section id="about">
      <div className={`${layout.section} mt-20`}>
        <CurrentPage style={abspathStyle}>
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          about
        </CurrentPage>
        <h2 className={`${styles.heading2} text-center md:text-start`}>
          Every great design
          <br /> begin with an even{" "}
          <span className="text-primary">better story</span>
        </h2>
        <p
          className={`${styles.paragraph} text-center md:text-start leading-[21px] text-[15px] tracking-[1px] w-[80%]`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
          necessitatibus earum ipsam, veritatis qui inventore quas. In
          voluptatum fuga ad nulla odio iusto, fugiat repudiandae accusamus non
          vitae alias, debitis nisi necessitatibus esse corrupti aliquam nostrum
          expedita officiis voluptate officia sit praesentium? Deleniti iusto
          provident exercitationem asperiores, distinctio aspernatur doloribus.
        </p>
      </div>
    </section>
  );
}

export default About;
