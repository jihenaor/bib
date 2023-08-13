import React from 'react';

function BlogsSection() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        <span>Otras Bibliotecas</span>{" "}
      </h1>
      <div className="swiper blogs-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
            <div className="image">
              <img src="assets/image/blog-1.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Biblioteca Gutemberg</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a
                 href="https://www.gutenberg.org/"
                target="_blank"
                className="btn gradient-Uaudi"
              >
                Ver
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="assets/image/blog-2.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Biblioteca Elejandria</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a
                href="https://www.elejandria.com/"
                target="_blank"
                className="btn gradient-Uaudi"
              >
                Ver
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="assets/image/blog-3.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Freeditorial</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a
                href="https://freeditorial.com/"
                target="_blank"
                className="btn gradient-Uaudi"
              >
                Ver
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="assets/image/blog-4.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Revistas Científicas</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a
                href="https://www.redalyc.org/"
                target="_blank"
                className="btn gradient-Uaudi"
              >
                Ver
              </a>
            </div>
          </div>
          <div className="swiper-slide box">
            <div className="image">
              <img src="assets/image/blog-5.jpg" alt="" />
            </div>
            <div className="content">
              <h3>Open Library</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                odio.
              </p>
              <a
                href="https://openlibrary.org/"
                target="_blank"
                className="btn gradient-Uaudi"
              >
                Ver
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogsSection;