import styles, { layout } from "../styles";
import { userInfo } from "../constants";
import me from "../assets/myProjects.png";
import {
  faInstagram,
  faGithub,
  faChrome,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
function UserInfo() {
  return (
    <section className={`${layout.sideBar} md:gap-8`}>
      <div className={`${styles.flexCenter} xl:flex-row flex-col`}>
        <h1 className={`${styles.heading1}`}>{userInfo.name}</h1>
        <p className={`${styles.padding} ${styles.paragraph} leading-6`}>
          {userInfo.field}
        </p>
      </div>
      <img
        src={me}
        className="sm:w-[250px] sm:h-[250px] px-2 w-[150px] h-[250px]  object-contain"
      />
      <div
        className={`${styles.flexCenter} sm:my-2  mt-2 flex-col gap-5 md:gap-3`}
      >
        <h3 className={`${styles.heading3} ovew tracking-[1px] text-center`}>
          {userInfo.email}
        </h3>
        <p className={`${styles.paragraph}  text-center`}>
          copyright 2023 Mahdi Entezari,All Right Reserved
        </p>
      </div>
      <div
        className={`${styles.flexCenter} gap-10 sm:gap-5 mt-4  text-[23px] sm:text-[20px]`}
      >
        <FontAwesomeIcon
          className="p-1 cursor-pointer text-textSecondary hover:text-blue-500"
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="p-1  cursor-pointer text-textSecondary hover:text-[#ccc]"
          icon={faGithub}
        />
        <FontAwesomeIcon
          className="p-1  cursor-pointer text-textSecondary hover:text-orange-600"
          icon={faChrome}
        />
        <FontAwesomeIcon
          className="p-1 cursor-pointer text-textSecondary hover:text-red-700"
          icon={faInstagram}
        />
      </div>
      <div className="w-[60%] xl:w-[70%] xl:mt-4">
        <Button style="mt-7 py-2 sm:py-1 sm:mt-3 xl:text-[18px]">
          <FontAwesomeIcon icon={faMessage} className="mr-3" />
          Hire Me!
        </Button>
      </div>
    </section>
  );
}

export default UserInfo;
