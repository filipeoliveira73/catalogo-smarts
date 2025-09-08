import styled from 'styled-components';

export const SeparatorSections = styled.div`
  margin: 3rem 0;
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;


export const InfoSection = styled.section`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 3rem;
  margin-top: 3rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
`;

export const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const SectionMedioBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  gap: 1rem;

  img {
    height: 250px;
    width: 570px;
  }
`;