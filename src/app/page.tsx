/* eslint-disable @next/next/no-img-element */
"use client";

import { mockProducts } from "@/mocks/products";
import { ProductCarousel } from "@/components/ProductCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderComponent } from "@/components/SliderComponent";
import {
  InfoSection,
  PageContainer,
  SectionMedioBanner,
  SectionText,
  SectionTitle,
  SeparatorSections,
} from "./styles";
import Stories from "@/components/Stories";

const productsSmartphones = mockProducts.filter((p) =>
  p.name.includes("Smartphone")
);
const productsSmartTvs = mockProducts.filter((p) =>
  p.name.includes("Smart TV")
);
const productsNotebooks = mockProducts.filter((p) =>
  p.name.includes("Notebook")
);

export default function HomePage() {
  return (
    <PageContainer>
      <SliderComponent />

      <Stories />

      <SeparatorSections>
        <ProductCarousel
          title="Destaques da Semana"
          products={productsSmartphones}
        />
      </SeparatorSections>

      {/* <SectionMedioBanner>
        <div>
          <img src="/phones.jpeg" alt="Banner 1" />
        </div>
        <div>
          <img src="/notebook.jpeg" alt="Banner 2" />
        </div>
      </SectionMedioBanner> */}

      <SeparatorSections>
        <ProductCarousel title="Camisetas que evangelizam" products={productsSmartTvs} />
      </SeparatorSections>

      <SeparatorSections>
        <ProductCarousel
          title="Terços e devocionais"
          products={productsNotebooks}
        />
      </SeparatorSections>
      
      <InfoSection>
        <SectionTitle>Sobre o Nosso Catálogo</SectionTitle>
        <SectionText>
          Bem-vindo ao nosso catálogo de produtos selecionados da Amazon! Nossa
          missão é facilitar a sua busca por produtos de qualidade, oferecendo
          uma curadoria dos melhores itens disponíveis na plataforma. Com a
          nossa afiliação, você pode encontrar rapidamente o que precisa e ser
          redirecionado de forma segura para a Amazon para finalizar sua compra.
        </SectionText>
      </InfoSection>
    </PageContainer>
  );
}
