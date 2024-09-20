import styles from "./ContactStyles.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [notification, setNotification] = useState('');

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    emailjs.send('service_oma5rgg', 'template_5uvistl', {
      name,
      email,
      message,
    }, 'I-6lP4wp39seMh4wv')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setNotification('Mail sent!');
      form.reset();
    }, (error) => {
      console.log('FAILED...', error);
      setNotification('Failed to send mail.');
    });
  };

  return (
    <motion.section
      id="contact"
      className={styles.container}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {notification && (
        <div className={styles.notification}>{notification}</div>
      )}
    </motion.section>
  );
}

export default Contact;
