import React from 'react';
import './test-carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Image imports
import slide_image_1 from '../../assets/Project/brainhack-codexp_teamphoto.jpg';
import slide_image_2 from '../../assets/Project/tfscale_drone.jpg';
import slide_image_3 from '../../assets/Project/tfscale_industryvisit1.jpg';
import slide_image_4 from '../../assets/Project/tfscale_socialpic1.jpg';

function TestCarousel() {
    return (
        <div className="carousel-container">
            <h1 className="heading">Project Highlights</h1>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper-container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="Project 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="Project 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="Project 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="Project 4" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default TestCarousel;
