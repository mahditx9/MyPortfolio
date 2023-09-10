/* eslint-disable react/prop-types */
import styles from "../styles";
import { motion } from "framer-motion";
function CurrentPage({ children, style }) {
  return (
    <motion.div
      className={`${styles.flexCenter} ${style} border-[1px] rounded-[20px] p-1 `}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

export default CurrentPage;
