import './App.css'

function App() {

  return (
<>
  {/* header section ends */}
  {/* bottom navbar  */}
  <nav className="bottom-navbar">
    <a href="#home" className="fas fa-home" />
    <a href="#featured" className="fas fa-list" />
    <a href="#arrivals" className="fas fa-tags" />
    <a href="#reviews" className="fas fa-comments" />
    <a href="#blogs" className="fas fa-blog" />
  </nav>
  {/* login form  */}
  <div className="login-form-container">
    <div id="close-login-btn" className="fas fa-times" />
    <form action="">
      <h3>sign in</h3>
      <span>username</span>
      <input
        type="email"
        name=""
        className="box"
        placeholder="enter your email"
        id=""
      />
      <span>password</span>
      <input
        type="password"
        name=""
        className="box"
        placeholder="enter your password"
        id=""
      />
      <div className="checkbox">
        <input type="checkbox" name="" id="remember-me" />
        <label htmlFor="remember-me"> remember me</label>
      </div>
      <input type="submit" defaultValue="sign in" className="btn" />
      <p>
        forget password ? <a href="#">click here</a>
      </p>
      <p>
        don't have an account ? <a href="#">create one</a>
      </p>
    </form>
  </div>
  {/* home section starts  */}
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
  {/* home section ense  */}
  {/* icons section starts  */}
  <section className="icons-container">
    <div className="icons">
      {/* <i class="fas fa-book"></i> */}
      <img width="43px" src="assets/image/coleccion.png" alt="" />
      <div className="content">
        <h3>Colección Digital y otras bibliotecas</h3>
        <p>Ver en menú (Otras Bibliotecas)</p>
      </div>
    </div>
    <div className="icons">
      {/* <i class="fas fa-book-open"></i> */}
      <img width="47px" src="assets/image/generos.png" alt="" />
      <div className="content">
        <h3>Varios Tipos de Géneros</h3>
        <p>Ver en menú (Categorías)</p>
      </div>
    </div>
    <div className="icons">
      {/* <i class="fas fa-book-reader"></i> */}
      <img width="40px" src="assets/image/navegacion.png" alt="" />
      <div className="content">
        <h3>Navegación Intuitiva</h3>
        <p>Sitio web fácil de usar</p>
      </div>
    </div>
    <div className="icons">
      {/* <i class="fas fa-tablet-alt"></i> */}
      <img width="47px" src="assets/image/multiplata.png" alt="" />
      <div className="content">
        <h3>Acceso Multiplataforma</h3>
        <p>Desde cualquier dispositivo</p>
      </div>
    </div>
  </section>
  {/* icons section ends */}
  {/* featured section starts  */}
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
  {/* featured section ends */}
  {/* newsletter section starts */}
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
  {/* newsletter section ends */}
  {/* arrivals section starts  */}
  <section className="arrivals" id="arrivals">
    <h1 className="heading">
      {" "}
      <span>Categorías</span>{" "}
    </h1>
    {/* footer section starts  */}
    <section className="categories">
      <div className="box-container">
        <div className="box">
          <h3>Todos</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver todos los géneros{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> +111-222-3333{" "}
          </a>
        </div>
        <div className="box">
          <h3>Especializados</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
        </div>
        <div className="box">
          <h3>Literatura</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
        </div>
        <div className="box">
          <h3>Artísticos e ilustrados</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right" /> Ver{" "}
          </a>
        </div>
      </div>
    </section>
    {/* footer section ends */}
    <div className="swiper arrivals-slider">
      <div className="swiper-wrapper">
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-1.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-2.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-3.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-4.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-5.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
      </div>
    </div>
    <div className="swiper arrivals-slider">
      <div className="swiper-wrapper">
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-6.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-7.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-8.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-9.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
        <a href="#" className="swiper-slide box">
          <div className="image">
            <img src="assets/image/book-10.png" alt="" />
          </div>
          <div className="content">
            <h3>new arrivals</h3>
            <div className="price">
              $15.99 <span>$20.99</span>
            </div>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  {/* arrivals section ends */}
  {/* deal section starts  */}
  <div className="deal-container">
    <section className="deal">
      <div className="content">
        <h3>Club de lectura</h3>
        <h1>Nada (1944) de Carmen Laforet</h1>
        <h4>La reunión de este mes será el próximo viernes 18 de agosto</h4>
        <p>
          ¡Únete a nuestro club de lectura y sumérgete en el fascinante mundo de
          los libros! Juntos exploraremos historias, debatiremos ideas y
          compartiremos nuestra pasión por la literatura. ¡Esperamos contar
          contigo para enriquecer nuestras experiencias de lectura! ¿Te unes?
          📚😊.
        </p>
        <a href="#" className="btn gradient-Uaudi">
          Ir a la reunión
        </a>
      </div>
      <div className="image">
        <img src="assets/image/ugo-biblioteca.png" alt="" />
      </div>
    </section>
  </div>
  {/* deal section ends */}
  {/* reviews section starts  */}
  <section className="reviews" id="reviews">
    <h1 className="heading">
      {" "}
      <span>Comentarios de algunos lectores </span>{" "}
    </h1>
    <div className="swiper reviews-slider">
      <div className="swiper-wrapper">
        <div className="swiper-slide box">
          <img src="assets/image/pic-1.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide box">
          <img src="assets/image/pic-2.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide box">
          <img src="assets/image/pic-3.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide box">
          <img src="assets/image/pic-4.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide box">
          <img src="assets/image/pic-5.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="swiper-slide box">
          <img src="assets/image/pic-6.png" alt="" />
          <h3>john deo</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.
          </p>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* reviews section ends */}
  {/* blogs section starts  */}
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
  {/* blogs section ends */}
  {/* footer section starts  */}
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
  {/* footer section ends */}
  {/* loader  */}
  {/*
  <div className="loader-container">
    <img src="assets/image/LoaderUA.gif" alt="" />
  </div>
*/
  }

  {/* custom js file link  */}
</>

  )
}

export default App
