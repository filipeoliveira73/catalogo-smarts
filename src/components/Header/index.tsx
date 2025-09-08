// src/components/Header.tsx
'use client';

import styled from 'styled-components';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: var(--secondary-color);
  padding: 1.5rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <NavLink href="/">
        Catálogo Smarts
      </NavLink>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/smartphones">Smartphones</NavLink>
        <NavLink href="/smarttvs">TVs</NavLink>
        <NavLink href="/notebooks">Notebooks</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
      </Nav>
    </HeaderContainer>
  );
};