import React from 'react';

function NewsletterSection() {
  return (
    <div className="newsletter-container">
    <section className="newsletter">
      <form
        id="contactForm"
        action="https://formspree.io/f/mgejowoo"
        method="POST"
      >
        <h3>Cuentanos que te gustaría leer</h3>
        <input
          type="email"
          name="e-mail"
          id="email"
          placeholder="Ingresa tu correo corporativo"
          className="box"
          required={true}
        />
        <input
          type="text"
          name="Nombre"
          id="name"
          placeholder="Tu Nombre"
          className="box"
          required={true}
        />
        <textarea
          className="box"
          name="Libro:"
          rows={3.5}
          placeholder="Escribe tu mensaje"
          required={true}
          defaultValue={""}
        />
        <input
          type="submit"
          defaultValue="Enviar Propuesta De Libro"
          className="btn"
        />
      </form>
    </section>
  </div>
  );
}

export default NewsletterSection;