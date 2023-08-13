import React from 'react';

function FeaturedSection() {
  return (
    <section className="featured" id="featured">
    <h1 className="heading">
      {" "}
      <span>Libros en tendencia</span>{" "}
    </h1>
    <div className="swiper featured-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-1.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            {/*<div class="price">$15.99 <span>$20.99</span></div>*/}
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-2.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-3.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-4.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-5.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-6.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-7.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-8.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-9.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
        <div className="swiper-slide box">
          <div className="icons">
            <a href="#" className="fas fa-search" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src="assets/image/book-10.png" alt="" />
          </div>
          <div className="content">
            <h3>Ejemplo libro</h3>
            <a href="#" className="btn gradient-Uaudi">
              Leer
            </a>
          </div>
        </div>
      </div>
      <div className="swiper-button-next" />
      <div className="swiper-button-prev" />
    </div>
  </section>
  );
}

export default FeaturedSection;