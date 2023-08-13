import React from 'react';

function IconsSection() {
  return (
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
  );
}

export default IconsSection;
