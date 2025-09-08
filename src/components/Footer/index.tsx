// src/components/Footer.tsx
'use client';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--secondary-color);
  color: #ccc;
  text-align: center;
  padding: 2rem;
  margin-top: 4rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} Catálogo Amazon. Todos os direitos reservados. Este site é um participante do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliados projetado para fornecer um meio para sites ganharem taxas de publicidade através de publicidade e links para a Amazon.com.
      </FooterText>
    </FooterContainer>
  );
};