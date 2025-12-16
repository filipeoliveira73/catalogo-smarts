// src/components/Footer.tsx
"use client";

import { FooterContainer } from "./styles";
import { Text } from "../Text";

export const Footer = () => {
  return (
    <FooterContainer>
      <Text
        fontSize="0.9rem"
        text="© {new Date().getFullYear()} Catálogo daFé. Todos os direitos
        reservados. Este site é um participante do Programa de Associados da
        Amazon Services LLC, um programa de publicidade de afiliados projetado
        para fornecer um meio para sites ganharem taxas de publicidade através
        de publicidade e links para a Amazon.com."
      />
    </FooterContainer>
  );
};
