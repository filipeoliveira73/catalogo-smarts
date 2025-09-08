/* eslint-disable @next/next/no-img-element */
// src/components/ProductCard.tsx
'use client';

import styled from 'styled-components';
import { Product } from '@/mocks/products';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 408px;

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
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--secondary-color);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    color: #b12704;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  a {
    background-color: var(--primary-color);
    color: #fff;
    padding: 0.75rem 2rem;
    border-radius: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      background-color: #e68a00;
      transform: scale(1.05);
    }
  }
`;

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <a href={product.link} target="_blank" rel="noopener noreferrer">
        Comprar
      </a>
    </CardContainer>
  );
};
