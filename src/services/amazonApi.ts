// src/services/amazonApi.ts
// Este arquivo simula a integração com a API da Amazon usando os dados de mock.
// Quando você obtiver suas credenciais, deverá substituir esta lógica pela
// integração real. A API de afiliados da Amazon exige a assinatura das requisições,
// o que é um processo complexo. É altamente recomendado usar um SDK oficial para
// simplificar essa etapa.

import { Product, mockProducts } from '@/mocks/products';

export const fetchProducts = async (category: string): Promise<Product[]> => {
  console.log(`Buscando produtos para a categoria: ${category}`);

  // Simule um atraso de rede
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredProducts: Product[] = [];
  
  switch (category) {
    case 'smartphones':
      // Filtra produtos de smartphones.
      filteredProducts = mockProducts.filter(p => p.name.includes("Smartphone"));
      break;
    case 'smarttvs':
      // Filtra produtos de smart TVs.
      filteredProducts = mockProducts.filter(p => p.name.includes("Smart TV"));
      break;
    case 'notebooks':
      // Filtra produtos de notebooks.
      filteredProducts = mockProducts.filter(p => p.name.includes("Notebook"));
      break;
    default:
      // Retorna todos os produtos se a categoria não for especificada.
      filteredProducts = mockProducts;
      break;
  }

  return filteredProducts;
};
