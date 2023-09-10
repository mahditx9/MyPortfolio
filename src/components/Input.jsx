import { forwardRef } from "react";

// eslint-disable-next-line react/display-name, react/prop-types
const Input = forwardRef(({ type, style, placeholder }, ref) => {
  return (
    <input
      type={type || "text"}
      className={`outline-none text-dark dark:text-textSecondary tracking-[1px] bg-dark dark:bg-transparen text-[16px] font-sans border-b-[1px] border-dark dark:border-[#fff] p-1 ${style}`}
      ref={ref}
      placeholder={placeholder}
    />
  );
});

export default Input;
