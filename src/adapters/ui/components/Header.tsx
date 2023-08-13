import React from 'react';

function Header() {
  return (
    <header className="header">
        <section className="header-1">
        <a href="#" className="logo">
            {" "}
            <i className="fas fa-book" /> Biblioteca U. Audifarma{" "}
        </a>
        <form action="" className="search-form">
            <input type="search" name="" placeholder="Buscar ..." id="search-box" />
            <label htmlFor="search-box" className="fas fa-search" />
        </form>
        <div className="icons">
            <div id="search-btn" className="fas fa-search" />
            <img
            src="assets/image/logo_UA_horizontal.png" 
            width="120px"
            alt="Logo Universidad Audifarma"
            />
            {/*
        <a href="#" class="fas fa-heart"></a>
        <a href="#" class="fas fa-shopping-cart"></a>
        */}
            <div className="oculto">
            <div id="login-btn" className="fas fa-user" />
            </div>
        </div>
        </section>
        <div className="header-2">
        <nav className="navbar">
            <a href="#home">Inicio</a>
            <a href="#featured">Recientes</a>
            <a href="#arrivals">Categorias</a>
            <a href="#reviews">Testimonios</a>
            <a href="#blogs">Otras Bibliotecas</a>
        </nav>
        </div>
    </header>
  );
}

export default Header;
