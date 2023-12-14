import style from './component.module.css';
import { TestimoniesCopy } from '@/copyContents/Testimony';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial() {
  return (
    <>
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
        >
        {TestimoniesCopy.map((testimoyCopy, index) =>
            (
                <SwiperSlide key={index}>
                    <div className={style.testimonial__card}>
                        <Image
                            src={testimoyCopy.img}
                            alt={testimoyCopy.name}
                            width={96}
                            height={96}
                        />
                        <div className={style.testimonial__testimony}>
                            <p>
                                {testimoyCopy.testimonyText}
                            </p>
                        </div>
                        <div className={style.testimonial__client__name}>
                            <h5>
                                {testimoyCopy.name}
                            </h5>
                        </div>
                        <div className={style.testimonial__position}>
                            <span>
                                {testimoyCopy.jobTitle}
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            )
        )}
        </Swiper>
    </>
  )
}
