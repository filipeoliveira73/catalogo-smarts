/* eslint-disable @next/next/no-img-element */
// src/components/ProductCard.tsx
"use client";

import { Product } from "@/mocks/products";
import { ButtonLink } from "../ButtonLink";
import {
  CardContainer,
  ContainerInfo,
  TitleProduct,
  PriceProduct,
  ContainerImage,
} from "./styles";
interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <CardContainer>
      <ContainerImage>
        <img src={product.image} alt={product.name} />
      </ContainerImage>
      <ContainerInfo>
        <TitleProduct>{product.name}</TitleProduct>
        <PriceProduct>R$ {product.price}</PriceProduct>
        <ButtonLink
          text="Ver na amazon"
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
        />
      </ContainerInfo>
    </CardContainer>
  );
};
