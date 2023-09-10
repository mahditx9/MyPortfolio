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
function App() {
  const [toggle, setToggle] = useState(false);
  // const [theme, setTheme] = useState(getTheme);
  // function getTheme() {
  //   return localStorage.getItem("theme");
  // }
  useEffect(() => {
    localStorage.setItem("theme", toggle ? "light" : "dark");
    // setTheme(getTheme);
  }, [toggle]);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.documentElement.className = theme;
  }, [toggle]);
  return (
    <section className={`xl:flex p-4`}>
      <section
        className={`sm:h-[94%] sm:w-[30%] md:w-[28%] w-full rounded-[16px] border-[1px] border-textSecondary sm:fixed ${styles.padding} `}
      >
        <UserInfo />
      </section>

      <section
        className={`sm:absolute sm:right-[1rem] sm:ml-[12rem] sm:w-[65%] mt-4 ${styles.padding}`}
      >
        <button onClick={() => setToggle((prev) => !prev)}>Switch</button>
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
