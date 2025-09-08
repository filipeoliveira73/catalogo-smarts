/* eslint-disable @next/next/no-img-element */
// src/components/Footer.tsx
'use client';

import styled from 'styled-components';
import Slider from 'react-slick';
import { Product, mockBanners } from '@/mocks/products';


const MainBanner = styled.div`
  margin-bottom: 2rem;
  border: none;

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

const Content = styled.div`
  /* height: 233px; */
    border: none;

    img {
      width: 100%;
      height: 233px;
      height: auto;
      border-radius: 4px;
    }
`;

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

export const SliderComponent = () => {
  return (
      <MainBanner>
        <Slider {...bannerSettings}>
          {mockBanners.map((banner: Product) => (
            <Content key={banner.id}>
              <a href={banner.link}>
                <img src={banner.image} alt={banner.name} />
              </a>
            </Content>
          ))}
        </Slider>
      </MainBanner>
  );
};