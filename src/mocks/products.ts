// src/mocks/products.ts

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  link: string;
}

export const mockProducts: Product[] = [
  {
    id: "prod-1",
    name: "Catecismo da Igreja Católica",
    price: "53,80",
    image: "/products/catecismo.jpg",
    link: "https://amzn.to/49cfCsQ",
  },
  {
    id: "prod-10",
    name: "O livro das orações católicas",
    price: "37,90",
    image: "/products/oracoes-catolicas.jpg",
    link: "https://amzn.to/3Lm1gOG",
  },
  {
    id: "prod-11",
    name: "Missário 2026",
    price: "65,00 ",
    image: "/products/missario.jpg",
    link: "https://amzn.to/3N1adxk",
  },
  {
    id: "prod-2",
    name: "Confissões de Santo Agostinho",
    price: "30,30",
    image: "/products/confissoes.jpg",
    link: "https://amzn.to/492cIrY",
  },
  {
    id: "prod-23",
    name: "Catecismo da Igreja Católica - Capa dura",
    price: "144,90",
    image: "/products/catecismo-promulgado.jpg",
    link: "https://amzn.to/4phMAhk",
  },
  {
    id: "prod-22",
    name: "O Rosário Meditado",
    price: "119,90 ",
    image: "/products/rosario-meditado.jpg",
    link: "https://amzn.to/4jkx2YM",
  },
];

export const mockCamisetas: Product[] = [
  {
    id: "prod-1",
    name: "Camiseta jesus cristo rei dos reis",
    price: "46,90 ",
    image: "/products/camisa1.jpg",
    link: "https://amzn.to/49yiIZs",
  },
  {
    id: "prod-11",
    name: "Camisa Retrato Jesus Cristo",
    price: "55,00",
    image: "/products/camisa3.jpg",
    link: "https://amzn.to/4pm3rjj",
  },
  {
    id: "prod-2",
    name: "Camiseta Cristã Católica Frase de Fé Esperança 2",
    price: "59,90",
    image: "/products/camisa4.jpg",
    link: "https://amzn.to/44PbVbeY",
  },
  {
    id: "prod-23",
    name: "Camisa Masculina Cristã Yeshua Jesus",
    price: "58,90",
    image: "/products/camisa5.jpg",
    link: "https://amzn.to/4qrmSIi",
  },
  {
    id: "prod-22",
    name: "Camiseta Leão Tribo Judá Jesus Cristo Camisa Cristã",
    price: "77,90",
    image: "/products/camisa6.jpg",
    link: "https://amzn.to/45wQxHU",
  },
];

export const mockTercos: Product[] = [
  {
    id: "prod-1",
    name: "Terço de Madeira São José",
    price: "R$25,01 ",
    image: "/products/terco1.jpg",
    link: "https://amzn.to/3MS8WZA",
  },
  {
    id: "prod-11",
    name: "Terço Imbuia Quadrado 10MM São Bento",
    price: "R$44,90",
    image: "/products/terco2.jpg",
    link: "https://amzn.to/4q0jiF9",
  },
  {
    id: "prod-2",
    name: "Aramon Terço Cordão São Bento",
    price: "R$49,50",
    image: "/products/terco3.jpg",
    link: "https://amzn.to/4q0jiF9",
  },
  {
    id: "prod-23",
    name: "Terço Madeira Azul",
    price: "R$47,90",
    image: "/products/terco4.jpg",
    link: "https://amzn.to/4aAh8r6",
  },
  {
    id: "prod-22",
    name: "Terço Madeira Imbuia Cordão",
    price: "R$48,90",
    image: "/products/terco5.jpg",
    link: "https://amzn.to/4aFjVPM",
  },
  {
    id: "prod-22",
    name: "Terço Madeira Vermelho",
    price: "R$49,90",
    image: "/products/terco6.jpg",
    link: "https://amzn.to/4jkPGA1",
  },
  {
    id: "prod-22",
    name: "Colar Terço São Bento Preto Fosco",
    price: "R$55,90",
    image: "/products/terco7.jpg",
    link: "https://amzn.to/49fT7Dd",
  },
];

export const mockBanners: Product[] = [
  {
    id: "banner-1",
    name: "Banner Promoção de Fones",
    price: "",
    image: "/b3.png",
    link: "/thema01.jpeg",
  },
  {
    id: "banner-2",
    name: "Banner Lançamento de TVS",
    price: "",
    image: "/b4.png",
    link: "/thema02.jpeg",
  },
];
