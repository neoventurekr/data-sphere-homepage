import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
import styled from '@emotion/styled';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import {useCustomTranslation} from "@/hook/useCustomTranslation";

const Wrapper = styled.div`
    position: relative;
    margin: 40px -12px 0;
    --swiper-pagination-progressbar-bg-color: var(--gray100, #EEE);
    --swiper-pagination-progressbar-size: 10px;
    --swiper-pagination-color: var(--main);
    
    ::after {
        content: '';
        position: absolute;
        width: 150px;
        height: 480px;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 80%);
        top: 0;
        right: 0;
        z-index: 10;
    }
    
    .swiper {
        padding: 6px 12px 90px;
    }
    
    .swiper-pagination {
        top: auto;
        bottom: 0;
        border-radius: 5px;
        overflow: hidden;
        z-index: 20;
    }
    
    .prev-button,.next-button {
        position: absolute;
        display: flex;
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background: var(--gray100, #EEE);
        top: 50%;
        transform: translateY(-50%);
        z-index: 20;
        cursor: pointer;
        
        &:before, &:after {
            content: '';
            position: absolute;
            width: 3px;
            height: 17px;
            background: var(--gray100, #CACACA);
            left: 50%;
        }

        &:before {
            transform: rotate(-45deg);
            top: 16px;
        }
        
        &:after {
            transform: rotate(45deg);
            bottom: 16px;
        }
        
        &.prev-button {
            transform: translateY(-50%) rotate(180deg);
            left: -100px;

        }

        &.next-button {
            right: -80px;
        }
    }
    
    .card {
        position: relative;
        display: flex;
        height: 400px;
        padding: 45px 39px;
        flex-direction: column;
        border-radius: 20px 20px 80px 20px;
        background: var(--white, #FFF);
        box-shadow: 0 4px 16px 2px rgba(0, 0, 0, 0.15);
        transition: all 0.2s;
        
        &.swiper-slide-active {
            background: var(--main);
            color: var(--white, #FFF);
            transform: scale(1.02);

            .icon {
                filter: invert(1);
            }
        }
        
        .title {
            font-size: 36px;
            font-weight: 600;
            margin-bottom: 24px;
        }
        
        .description {
            font-size: 20px;
        }

        .icon {
            position: absolute;
            width: auto;
            height: 70px;
            right: 45px;
            bottom: 40px;
        }
    }
`

const CardSlider = () => {
  const [swiper, setSwiper] = useState<SwiperClass>();
  
  const handleClickPrev = () => {
    swiper?.slidePrev();
  };
  const handleClickNext = () => {
    swiper?.slideNext();
  };
  
  const { t } = useCustomTranslation();
  
  return (
    
    <Wrapper>
      <Swiper
        loop={true}
        spaceBetween={46}
        slidesPerView={3}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        modules={[Pagination]}
        pagination={{ clickable: true, type: 'progressbar' }} // 초기에는 null
      >
        {Array.from({length: 6}, (_, index) => (
          <SwiperSlide className={'card'} key={index}>
            <p className={'title'}>
              {t(`solution.card_${index + 1}_title`)}
            </p>
            <p className={'description'}>
              {t(`solution.card_${index + 1}_description`)}
            </p>
            <img className={'icon'} src={`/icons/card-icon-${index+1}.svg`} alt={'icon'} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button className={'prev-button'} onClick={handleClickPrev}/>
      <button className={'next-button'} onClick={handleClickNext}/>
    </Wrapper>
  );
};

export default CardSlider;