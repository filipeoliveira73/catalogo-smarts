import styled from "styled-components";

export const CarouselWrapper = styled.div`
  margin-top: 4rem;

  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide > div {
    padding: 0 10px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: var(--secondary-color);
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
`;
