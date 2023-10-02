// import myProjects from "./assets/myProjects.png";
import { useEffect, useState } from "react";
import {
  UserInfo,
  Home,
  About,
  Resume,
  Portfolio,
  Contact,
} from "./components";
import styles from "./styles";
import Menu from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import MobileMenu from "./components/mobileMenu";

function App() {
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", toggle ? "light" : "dark");
  }, [toggle]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.className = theme;
  }, [toggle]);
  return (
    <section className={`xl:flex px-4 py-1`}>
      <button
        className={`inline-block p-1 rounded-full dark:text-[#eee] text-textSecondary dark:hover:text-primary hover:text-primary border-[1px] border-textSecondary  text-center text-xl xl:text-3xl font-semibold font-poppins absolute z-20 right-3 xs:right-8 top-1/4 sm:top-5 sm:right-24 cursor-pointer w-[50px] h-[50px]`}
        onClick={() => setToggle((prev) => !prev)}
      >
        {toggle ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <button
        className={`inline-block xs:hidden p-1 rounded-full dark:text-[#eee] text-textSecondary dark:hover:text-primary hover:text-primary border-[1px] border-textSecondary  text-center text-xl xl:text-3xl font-semibold font-poppins absolute z-20 right-3 xs:right-8 top-20  sm:top-20 sm:right-24 cursor-pointer w-[50px] h-[50px]`}
        onClick={() => setIsOpen(true)}
      >
        <FontAwesomeIcon icon={faGripLines} />
      </button>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}

      <section
        className={`sm:h-[96%] lg:h-[93%] sm:w-[30%] md:w-[28%] w-[70%] mx-auto sm:mx-0 rounded-[16px] border-[1px] border-textSecondary sm:fixed ${styles.padding} `}
      >
        <UserInfo />
      </section>

      <section
        className={`sm:absolute sm:right-[1rem] sm:ml-[12rem] sm:w-[65%] mt-4 ${styles.padding}`}
      >
        <Menu />
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </section>
    </section>
  );
}

export default App;
