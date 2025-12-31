import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 408px;

  @media (max-width: 1025px) {
    margin: 0rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
    max-height: 245px;
  }

  @media (max-width: 1025px) {
    img {
      max-height: 160px;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TitleProduct = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
`;

export const PriceProduct = styled.div`
  font-size: 1rem;
  color: #181717ff;
  font-weight: 800;
  margin-bottom: 1rem;
`;

export const ContainerInfo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  width: 100%;
`;
