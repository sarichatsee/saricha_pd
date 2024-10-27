import React from 'react';
import './test-carousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function TestCarousel({ images = [] }) {
    return (
        <div className="carousel-container">
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
                {images.map((mediaSrc, index) => (
                    <SwiperSlide key={index}>
                        {/* Check if mediaSrc is a video or an image */}
                        {mediaSrc.endsWith(".mp4") ? (
                            <video src={mediaSrc} controls className="carousel-media" draggable="false" />
                        ) : (
                            <img src={mediaSrc} alt={`slide-${index}`} className="carousel-media" draggable="false" />
                        )}
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default TestCarousel;
