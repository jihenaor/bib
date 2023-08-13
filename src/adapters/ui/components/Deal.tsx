import React from 'react';

function DealSection() {
  return (
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
  );
}

export default DealSection;