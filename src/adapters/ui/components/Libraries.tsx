
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { libraries } from '../../../assets/data/libraries'; // Importa la lista de bibliotecas desde el archivo libraries.ts


function LibrariesSection() {
  return (
    <section className="blogs" id="blogs">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {libraries.map((library, index) => (
    <SwiperSlide>
    <div
      className="swiper-slide box"
      style={{ transition: 'transform 0.3s' }}
    >
      <div className="image">
        <img src={library.imageSrc} alt="" />
      </div>
      <div className="content">
        <h3>{library.title}</h3>
        <p>{library.description}</p>
        <a
          href={library.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn gradient-Uaudi"
        >
          Ver
        </a>
      </div>
    </div>
  </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default LibrariesSection;
