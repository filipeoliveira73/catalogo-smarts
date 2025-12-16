// src/components/Footer.tsx
/* eslint-disable @next/next/no-img-element */
"use client";
import Slider from "react-slick";
import {
  bannerSettings,
  ContentOne,
  ContentTwo,
  MainBanner,
  SubComponentFlex,
  SubComponentFlexAlter,
  SubContent,
  SubTitle,
  Title,
} from "./styles";

export const Banner1 = () => {
  return (
    <ContentOne>
      <SubComponentFlex>
        <SubContent>
          <Title>Seja bem vindo ao seu Catálogo da Fé</Title>
        </SubContent>
        <img src="/terco-img.png" alt="terco" />
      </SubComponentFlex>
    </ContentOne>
  );
};

export const Banner2 = () => {
  return (
    <ContentTwo>
      <SubComponentFlexAlter>
        <SubContent>
          <Title>Presentes que evangelizam</Title>
          <SubTitle>
            {"Um presente que evangeliza,"}
          </SubTitle>
           <SubTitle>
            {" toca a alma e aproxima do céu."}
          </SubTitle>
        </SubContent>
        <img src="/presente.png" alt="presente" />
      </SubComponentFlexAlter>
    </ContentTwo>
  );
};

export const SliderComponent = () => {
  return (
    <MainBanner>
      <Slider {...bannerSettings}>
        {/* {mockBanners.map((banner: Product) => (
            <Content key={banner.id}>
              <a href={banner.link}>
                <img src={banner.image} alt={banner.name} />
              </a>
            </Content>
          ))} */}
        <Banner1 />
        <Banner2 />
      </Slider>
    </MainBanner>
  );
};
