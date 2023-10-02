/* eslint-disable react/prop-types */
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function MobileMenu({ setIsOpen }) {
  return (
    <motion.nav
      animate={{ animation: "slideDown 2s" }}
      transition={{ ease: 0.5, duration: 3 }}
      className="py-8 z-40 w-full h-[100vh] sticky bg-dark  text-textSecondary  dark:text-textPrimary flex flex-col items-center justify-between capitalize"
    >
      <FontAwesomeIcon
        icon={faClose}
        className="absolute text-red-600 hover:text-red-800 dark:hover:text-red-800 text-4xl right-3 top-3 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(false)}
        className="hover:text-primary dark:hover:text-primary text-3xl"
      >
        home
      </motion.a>
      <motion.a
        href="#about"
        onClick={() => setIsOpen(false)}
        whileHover={{ scale: 1.1 }}
        className="hover:text-primary dark:hover:text-primary text-3xl"
      >
        about
      </motion.a>
      <motion.a
        href="#my-skills
        onClick={()=>setIsOpen(false)}
        whileHover={{scale:1.1}}"
        className="hover:text-primary dark:hover:text-primary text-3xl"
      >
        my skills
      </motion.a>
      <motion.a
        href="#portfolio"
        onClick={() => setIsOpen(false)}
        whileHover={{ scale: 1.1 }}
        className="hover:text-primary dark:hover:text-primary text-3xl"
      >
        portfolio
      </motion.a>
      <motion.a
        href="#contact"
        onClick={() => setIsOpen(false)}
        whileHover={{ scale: 1.1 }}
        className="hover:text-primary dark:hover:text-primary text-3xl"
      >
        contact
      </motion.a>
    </motion.nav>
  );
}

export default MobileMenu;
