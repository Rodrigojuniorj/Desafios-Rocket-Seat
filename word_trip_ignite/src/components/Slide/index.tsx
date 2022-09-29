import { Box, Flex, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SlideSingle } from './SlideSingle';

export function Slide() {
  const [isMediaQuery] = useMediaQuery('(min-width: 768px)')

  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        navigation={isMediaQuery ? true : false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <SlideSingle image="/slide/america_norte.png" continent='América do Norte' url='america-do-norte'  />
        </SwiperSlide>
        <SwiperSlide>
          <SlideSingle image="/slide/america_sul.png" continent='América do Sul' url='america-do-sul' />
        </SwiperSlide>
        <SwiperSlide>
          <SlideSingle image="/slide/asia.png" continent='Ásia' url='asia' />
        </SwiperSlide>
        <SwiperSlide>
          <SlideSingle image="/slide/africa.png" continent='África' url='africa' />
        </SwiperSlide>
        <SwiperSlide>
          <SlideSingle image="/slide/continent_europa.png" continent='Europa' url='europa' />
        </SwiperSlide>
        <SwiperSlide>
          <SlideSingle image="/slide/oceania.png" continent='Oceania' url='oceania' />
        </SwiperSlide>
        
      </Swiper>
  );
}