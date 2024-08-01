import Title from "../../Title/Title";
import "../style.scss";
import ContactForm from "./ContactForm/ContactForm";
import Github from "./Github/Github";
import Gmail from "./Gmail/Gmail";
import Linkedin from "./Linkedin/Linkedin";
import "./style.scss";
import Whatsapp from "./Whatsapp/Whatsapp";

const Contact = () => {
  return (
    <div id="contact" className="same-container">
      <div>
        <Title title={"CONTACT"} />
        <ContactForm />
        <div className="social-links-contact">
          <Whatsapp />
          <Gmail />
          <Linkedin />
          <Github />
        </div>
      </div>
      <div className="number-contact">
        <i className="bi bi-telephone-fill shake"></i>
        +972543035701
      </div>
    </div>
  );
};

export default Contact;
