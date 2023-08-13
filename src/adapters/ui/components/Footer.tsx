import React from 'react';

function FooterSection() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Enlaces del sitio</h3>
          <a href="#">
            {" "}
            <i className="fas fa-link" /> Inicio{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-link" /> Recientes{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-link" /> Categorías{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-link" /> Testimonios{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-link" /> otras bibliotecas{" "}
          </a>
        </div>
        <div className="box">
          <h3>Enlaces bibliotecas</h3>
          <a href="#">
            {" "}
            <i className="fas fa-book" /> Project Gutemberg{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-book" /> Elejandria{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-book" /> Freeditorial{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-book" /> redalyc{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-book" /> Open library{" "}
          </a>
        </div>
        <div className="box">
          <h3>Enlaces de interés</h3>
          <a href="#">
            {" "}
            <i className="fas fa-external-link-alt" /> U. audifarma{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-external-link-alt" /> ECO{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-external-link-alt" /> SUSI{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-external-link-alt" /> Creciendo juntos{" "}
          </a>
        </div>
        <div className="box">
          <h3>Contacto e información</h3>
          <a href="#">
            {" "}
            <i className="fas fa-envelope" /> wilson.russi@audifarma.com.co{" "}
          </a>
          <img src="assets/image/mapa.png" className="map" alt="" />
        </div>
      </div>
      <div className="share">
        <a
          href="https://www.facebook.com/Audifarma"
          className="fab fa-facebook-f"
        />
        <a
          href="https://www.instagram.com/audifarma_sa/"
          className="fab fa-instagram"
        />
        <a
          href="https://www.linkedin.com/company/audifarma-s.a/mycompany/"
          className="fab fa-linkedin"
        />
      </div>
      <div className="credit">
        {" "}
        Creado por <span>GC</span> | Audifarma S.A © 2023
      </div>
    </section>
  );
}

export default FooterSection;