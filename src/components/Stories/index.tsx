'use client';

import React from 'react';
import { stories } from '@/mocks/stories';
import Image from 'next/image';
import { StoryContainer, StoryIcon, StoryDescription } from './styles';
import Slider from 'react-slick';

const Stories: React.FC = () => {

/*   const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }; */

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {stories.map((story) => (
        <StoryContainer key={story.id}>
          <StoryIcon>
            <Image src={story.icon} alt={story.description} width={32} height={32} />
          </StoryIcon>
          <StoryDescription>{story.description}</StoryDescription>
        </StoryContainer>
      ))}
    </Slider>
  );
};

export default Stories;
