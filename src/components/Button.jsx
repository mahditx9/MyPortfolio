import styles from "../styles";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function Button({ style, type, children }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
      type={type || "button"}
      className={`${styles.flexCenter} ${style} bg-primary cursor-pointer  rounded-[16px] text-[#1d1d1d] w-full btn md:py-2 `}
    >
      {children}
    </motion.button>
  );
}

export default Button;
