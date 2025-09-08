// src/components/ProductCarousel.tsx
'use client';

import styled from 'styled-components';
import Slider from 'react-slick';
import { ProductCard } from '../ProductCard';
import { Product } from '@/mocks/products';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = styled.div`
  margin-top: 2rem;
  
  .slick-list {
    margin: 0 -10px;
  }
  
  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-prev:before, .slick-next:before {
    color: var(--secondary-color);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <CarouselWrapper>
      <SectionTitle>{title}</SectionTitle>
      <Slider {...settings}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </CarouselWrapper>
  );
};