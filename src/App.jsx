import { Swiper, SwiperSlide } from "swiper/react";
import {pictures} from './pictures'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
function App() { 
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {pictures.map((pic, id) => {
          return (
            <SwiperSlide key={id}>
              <img src={pic.src} alt={pic.alt} />
            </SwiperSlide>
          );
        })}
        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </div>
  );
}

export default App;
