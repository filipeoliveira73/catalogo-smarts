import styled from "styled-components";

export const MainBanner = styled.div`
  margin-bottom: 2rem;
  border: none;
  border-radius: 6px;

  .slick-dots {
    bottom: 15px;
  }

  .slick-dots li button:before {
    color: white;
  }
`;

export const Content = styled.div`
  /* height: 233px; */
  border: none;

  img {
    width: 100%;
    height: 233px;

    border-radius: 4px;
  }
`;

export const bannerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

export const ContentOne = styled.div`
  height: 233px;
  border: none;
  background-color: #f2f7f8;
`;

export const ContentTwo = styled.div`
  height: 233px;
  border: none;

  @media (max-width: 1025px) {
    display: none;
  }
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: #232f3e;
  width: 260px;
  margin-bottom: 16px;

  @media (max-width: 1025px) {
    font-size: 18px;
    font-weight: 400;
    width: 160px;
  }
`;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #232f3e;

  @media (max-width: 1025px) {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const Title2 = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
`;

export const SubTitle2 = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const SubComponentBanner = styled.div`
  font-size: 16px;
`;

export const SubComponentText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubComponentFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 650px;
    height: 260px;
    border-radius: 14px;
  }
`;

export const SubComponentFlexAlter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 650px;
    height: 260px;
    border-radius: 14px;

    @media (max-width: 1025px) {
      width: 350px;
      height: 160px;
    }
  }
`;

export const SubContent = styled.div`
  @media (max-width: 1025px) {
    margin-left: 10px;
  }
`;
