import { SwiperSlide } from 'swiper/react';
import { Library } from '../../../domain/Library';

interface LibrarySlideProps {
  library: Library;
}

function LibrarySlide({ library }: LibrarySlideProps) {
  return (
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
  );
}

export default LibrarySlide;
