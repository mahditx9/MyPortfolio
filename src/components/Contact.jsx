import styles, { layout, abspathStyle } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-regular-svg-icons";
import CurrentPage from "./CurrentPage";
import Input from "./Input";
import Button from "./Button";
function Contact() {
  return (
    <section id="portfolio">
      <div className={`${layout.section} mt-20`}>
        <CurrentPage style={abspathStyle}>
          <FontAwesomeIcon icon={faContactCard} className="mr-2" />
          contact
        </CurrentPage>
        <h2 className={`${styles.heading2} text-center md:text-start`}>
          {`
          Let's Work
        `}{" "}
          <span className="text-primary">Together!</span>
        </h2>
        <h3 className={`${styles.heading3} text-center sm:text-start`}>
          info@mahdientezari.ir
        </h3>
        <form className={`${styles.flexStart} flex-col gap-y-8`}>
          <div
            className={`${styles.flexCenter} flex-col sm:flex-row gap-x-10 gap-y-8`}
          >
            <div className={`${styles.flexStart} flex-col`}>
              <label className="uppercase text-[13px] mb-1 text-dark dark:text-textPrimary">
                full name <span className="text-red-600">*</span>
              </label>
              <Input placeholder="Your full name" />
            </div>
            <div className={`${styles.flexStart} flex-col`}>
              <label className="uppercase text-[13px] mb-1 text-dark dark:text-textPrimary">
                Email <span className="text-red-600">*</span>
              </label>
              <Input type="email" placeholder="Your email adress" />
            </div>
          </div>
          <div
            className={`${styles.flexCenter} flex-col sm:flex-row gap-x-10 gap-y-8`}
          >
            <div className={`${styles.flexStart} flex-col`}>
              <label className="uppercase text-[13px] mb-1 text-dark dark:text-textPrimary">
                Phone <span className="text-textSecondary">(optional)</span>
              </label>
              <Input type="tel" placeholder="Your phone number" />
            </div>
            <div className={`${styles.flexStart} flex-col`}>
              <label className="uppercase text-[13px] mb-1 text-dark dark:text-textPrimary">
                Subject <span className="text-red-600">*</span>
              </label>
              <Input type="text" placeholder="Select a subject" />
            </div>
          </div>
          <div className={`${styles.flexStart} flex-col  w-full`}>
            <label className="uppercase text-[13px] mb-1 text-dark dark:text-textPrimary">
              message <span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full outline-none  resize-none border-b-[1px] dark:border-[#fff] border-dark bg-[#fff] dark:bg-transparent"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <Button type="submit" style="mt-4 sm:w-[50%]  p-[6px]">
            send message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
