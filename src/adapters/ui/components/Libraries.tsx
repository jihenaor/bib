
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import LibrarySlide from './LibrarySlide';
import { libraries } from '../../../assets/data/libraries'; // Importa la lista de bibliotecas desde el archivo libraries.ts

SwiperCore.use([Navigation, Pagination, Autoplay]);

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
          <LibrarySlide key={index} library={library} />
        ))}
      </Swiper>
    </section>
  );
}

export default LibrariesSection;
