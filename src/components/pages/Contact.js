import React, { useState,  } from 'react';
import emailjs from '@emailjs/browser';
import emailConfig from '../../email.config'

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorContactForm, setErrorContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

const validateInput = () => {
  let error = {}, noErrors = true;
  if (/^$/.test(contactForm.name)) {
    error.name = "testname"
    noErrors = false;
  }
  if (!/(^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$)/.test(contactForm.email)) {
    error.email = "test email"
    noErrors = false;
  }
  if (!/.{15,}/.test(contactForm.message)) {
    error.message = "test message"
    noErrors = false;
  }
  setErrorContactForm(error);
  return noErrors;
}

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!validateInput()) {
      
      return;
    }
    const email = await emailjs.send(emailConfig.service,emailConfig.template,{
      message: contactForm.message,
      reply_to: contactForm.email,
      name: contactForm.name,
      }, emailConfig.publicKey);
      console.log(email.text)
      
  }

  const handleChange = (event) => {
    const { id, value } = event.target;
    // clears error when user starts to type
    if (errorContactForm[id]) {
       setErrorContactForm({...errorContactForm, [id]:''});
    }
    setContactForm({
      ...contactForm,
      [id]: value,
    });
  };

  return (
    <article>
      <aside>
        <h2>contact</h2>
      </aside>
      <section className="content justify-space-evenly" id="contact">
        <form action="#" className="contact contact-left" onSubmit={handleFormSubmit}>
          <input type="text" id="name" placeholder="Enter your name here" onChange={handleChange} />
          <span className='bg-danger-subtle text-danger'>{errorContactForm.name}</span>
          <input type="text" id="email" placeholder="Enter your email here" onChange={handleChange} />
          <span className='bg-danger-subtle text-danger'>{errorContactForm.email}</span>
          <textarea name="message" id="message" rows="10" placeholder="Enter your message" onChange={handleChange} ></textarea>
          <span className='bg-danger-subtle text-danger'>{errorContactForm.message}</span>
          <input type="submit" className="button" value="Submit" />
        </form>

      </section>
    </article>
  );
}
