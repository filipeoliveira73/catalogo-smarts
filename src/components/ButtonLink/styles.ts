import styled from 'styled-components';

type LinkProps = {
    color?: string
    background?: string
     width?: string;
    height?: string;
}

export const ButtonContainer = styled.div`
    width: 100%;
    background-color: "##ffd814";
    padding: 0.35rem 1rem;
    
  @media (max-width: 1025px) {
    margin: 0 2rem;
  }
`;

export const LinkContainer = styled.a<LinkProps>`
    background-color: ${({ background }) => background ? background : "#ffd814"};
    color: ${({ color }) => color ? color : "#000"};;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    width: 100%;
    font-size: 14px;

    &:hover {
      background-color: #a08b13bd;
      transform: scale(1.05);
      text-decoration: none;
      cursor: pointer;
    }
`;