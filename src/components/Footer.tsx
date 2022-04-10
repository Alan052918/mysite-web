import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contacts from "../data/contact";

const ContactIcons = () => (
  <ul className="contact-icons">
    {contacts.map((s) => (
      <li key={s.label}>
        <a href={s.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

const Footer = () => {
  return (
    <footer className="footer">
      <ContactIcons />
      <div className="footer-react">
        <p>
          Powered by{" "}
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            React
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
