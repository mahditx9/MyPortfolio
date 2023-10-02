import styles, { layout } from "../styles";
import { userInfo } from "../constants";
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
    <section className={`${layout.sideBar} xl:gap-20 gap-1 p-2 md:p-0`}>
      <div className={`${styles.flexCenter} xl:flex-row flex-col`}>
        <h1 className={`${styles.heading1}`}>{userInfo.name}</h1>
        <p
          className={`${styles.padding} ${styles.paragraph} text-center ss:text-start`}
        >
          {userInfo.field}
        </p>
      </div>
      <img
        src="/my-photo.png"
        className="sm:w-[250px] sm:h-[250px] px-2 w-[150px] h-[250px]  object-contain"
      />
      <div className={`${styles.flexCenter} flex-col gap-3 sm:gap-5 md:gap-3`}>
        <h3 className={`${styles.heading3} tracking-[1px] text-center`}>
          {userInfo.email}
        </h3>
        <p className={`${styles.paragraph}  text-center`}>
          copyright 2023 <br className="block xs:hidden" /> Mahdi Entezari, All
          Right Reserved
        </p>
      </div>
      <div
        className={`${styles.flexCenter} gap-4 xs:gap-10 sm:gap-5 mt-4  text-[19px] ss:text-[23px] sm:text-[20px]`}
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
      <div className="w-full xs:w-[60%] xl:w-[70%] xl:mt-4 font-semibold">
        <Button style="mt-7 py-2 sm:py-1 sm:mt-3 xl:text-[18px]">
          <FontAwesomeIcon icon={faMessage} className="mr-3" />
          Hire Me!
        </Button>
      </div>
    </section>
  );
}

export default UserInfo;
