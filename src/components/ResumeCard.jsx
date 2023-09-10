import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  // faReact,
  // faJs,
  // faPython,
  // faHtml5,
  // faCss3,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles";
function ResumeCard() {
  return (
    <div
      className={`${styles.flexCenter} flex-col gap-y-2 w-[150px] h-[150px]`}
    >
      <div
        className={`w-[100px] h-[100px] ${styles.flexCenter} flex-col gap-y-2 p-3 border-[1px] rounded-[45px] border-textSecondary hover:border-primary`}
      >
        <FontAwesomeIcon
          icon={faFigma}
          className="text-[20px] text-textPrimary"
        />
        <span className="text-primary text-[18px]">92%</span>
      </div>
      <p className="text-textSecondary">figma</p>
    </div>
  );
}

export default ResumeCard;
