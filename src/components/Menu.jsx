/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faConnectdevelop,
  faMegaport,
} from "@fortawesome/free-brands-svg-icons";
import { faContactCard, faUser } from "@fortawesome/free-regular-svg-icons";
function Menu() {
  const [isHover, setIsHover] = useState(0);
  return (
    <nav
      className={`${styles.flexCenter} flex-col  gap-y-3 py-4 px-2 bg-transparent border-[1px] border-textSecondary rounded-[16px] fixed right-14 h-[50%] top-[9rem]`}
    >
      <ul className="flex flex-col justify-between items-center h-[100%]">
        <li className="relative">
          <a
            id={1}
            href="#"
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(0)}
            className="text-textSecondary text-[20px] hover:text-primary"
          >
            <FontAwesomeIcon icon={faHome} />
          </a>
          <span
            className={`${
              isHover === 1 ? "block" : "hidden"
            } absolute right-9 top-[5px] px-1 w-[70px] text-end border-r-[1px] border-primary rounded-r-[50px]  text-[15px] text-primary`}
          >
            Home
          </span>
        </li>
        <li className="relative">
          <a
            id={2}
            href="#"
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(0)}
            className="text-textSecondary text-[20px] hover:text-primary"
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <span
            className={`${
              isHover === 2 ? "block" : "hidden"
            } absolute right-9 top-[5px] px-1 w-[70px] text-end border-r-[1px] border-primary rounded-r-[50px]  text-[15px] text-primary`}
          >
            About
          </span>
        </li>
        <li className="relative">
          <a
            id={3}
            href="#"
            onMouseEnter={() => setIsHover(3)}
            onMouseLeave={() => setIsHover(0)}
            className="text-textSecondary text-[20px] hover:text-primary"
          >
            <FontAwesomeIcon icon={faConnectdevelop} />
          </a>
          <span
            className={`${
              isHover === 3 ? "block" : "hidden"
            } absolute right-9 top-[5px] px-1 w-[70px] text-end border-r-[1px] border-primary rounded-r-[50px]  text-[15px] text-primary`}
          >
            my skills
          </span>
        </li>
        <li className="relative">
          <a
            id={4}
            href="#"
            onMouseEnter={() => setIsHover(4)}
            onMouseLeave={() => setIsHover(0)}
            className="text-textSecondary text-[20px] hover:text-primary"
          >
            <FontAwesomeIcon icon={faMegaport} />
          </a>
          <span
            className={`${
              isHover === 4 ? "block" : "hidden"
            } absolute right-9 top-[5px] px-1 w-[70px] text-end border-r-[1px] border-primary rounded-r-[50px]  text-[15px] text-primary`}
          >
            portfolio
          </span>
        </li>
        <li className="relative">
          <a
            id={5}
            href="#"
            onMouseEnter={() => setIsHover(5)}
            onMouseLeave={() => setIsHover(0)}
            className="text-textSecondary text-[20px] hover:text-primary"
          >
            <FontAwesomeIcon icon={faContactCard} />
          </a>
          <span
            className={`${
              isHover === 5 ? "block" : "hidden"
            } absolute right-9 top-[5px] px-1 w-[70px] text-end border-r-[1px] border-primary rounded-r-[50px]  text-[15px] text-primary`}
          >
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
