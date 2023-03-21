import React from 'react';

export default function Contact() {
  return (

    <main>
      <article>
        <aside>
          <h2>contact me</h2>
        </aside>
        <section className="content justify-space-evenly" id="contact">
          <form action="#" className="contact contact-left">
            <input type="text" id="name" placeholder="Enter your name here" disabled />
            <input type="text" id="email" placeholder="Enter your email here" disabled />
            <textarea name="message" id="message" rows="10" placeholder="Enter your message" disabled></textarea>
            <input type="submit" className="button" value="Submit" disabled />
          </form>

        </section>
      </article>
    </main>
  );
}
