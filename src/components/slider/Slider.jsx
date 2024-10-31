// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Slider = ({slides}) => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {slides.map((slide)=>(
        <SwiperSlide key={slide.imgUrl}>
            <img src={slide.imgUrl} alt="image" />
        </SwiperSlide>
    ))}
    
   
   
  </Swiper>
  )
}

export default Slider