const styles = {
  container: "w-[100%] overflow-hidden",
  heading1:
    "font-poppins font-semibold text-textSecondary dark:text-textPrimary text-textPrimary text-2xl sm:text-2xl xl:text-4xl text-center w-full leading-tight sm:leading-none",
  heading2:
    "font-poppins font-semibold dark:text-textPrimary ss:text-[20px]   md:text-[26px] text-dark xs:leading-[30.8px] md:leading-[75px] sm:leading-[65px] text-dark xs:leading-[30.8px] leading-[33.8px] w-full",
  heading3:
    "font-poppins  dark:text-textPrimary ss:text-[18px] font-bold text-[11px] xs:text-[14px]  md:text-[16px] text-dark w-full",
  paragraph:
    "font-poppins font-normal dark:text-secondary text-textSecondary text-[16px] sm:text-[14px] leading-[28px] xs:leading-[16.8px] sm:leading-[18px] dark:text-shadow",
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-5 px-6 sm:py-5 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};
export const layout = {
  sideBar: `${styles.flexCenter} flex-col  h-full`,
  section: `xl:px-24 xl:py-4 ${styles.flexCenter} md:items-start flex-col sm:gap-7 gap-10 md:w-[80%] w-full md:ml-8`,
};

export const abspathStyle =
  " uppercase  w-[150px] text-[14px] sm:text-[18px] mx-auto md:mx-0 dark:text-textPrimary text-dark border-dark  dark:border-textPrimary dark:hover:text-primary hover:text-primary ";
export default styles;
