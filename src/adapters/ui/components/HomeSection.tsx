import React from 'react';

function HomeSection() {
  return (
    <div className="home-container">
        <section className="home" id="home">
        <div className="row">
            <div className="content">
            <h3>Biblioteca Digital</h3>
            <p>
                ¡Descubrexxxxxxx nuestra Biblioteca Digital Corporativa, una mina de
                conocimiento a tu disposición!
            </p>
            <p>
                Te ofrecemos una amplia gama de recursos que cubren desde temas
                profesionales especializados hasta libros de lectura libre para tu
                disfrute personal. Podrás potenciar tu desarrollo profesional, así
                como emocionantes historias y obras literarias.
            </p>
            <a href="#" className="btn gradient-Uaudi">
                U. Audifarma
            </a>
            </div>
            <div className="swiper books-slider">
            <div className="swiper-wrapper">
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-1.png" alt="" />
                </a>
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-2.png" alt="" />
                </a>
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-3.png" alt="" />
                </a>
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-4.png" alt="" />
                </a>
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-5.png" alt="" />
                </a>
                <a href="#" className="swiper-slide">
                <img src="assets/image/book-6.png" alt="" />
                </a>
            </div>
            <img src="assets/image/stand.png" className="stand" alt="" />
            </div>
        </div>
        </section>
    </div>
  );
}

export default HomeSection;
