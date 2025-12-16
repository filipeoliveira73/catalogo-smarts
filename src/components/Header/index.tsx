/* eslint-disable @next/next/no-img-element */
// src/components/Header.tsx
"use client";

import { useState } from "react";
import {
  ContainerIcon,
  DesktopNav,
  Hamburger,
  HeaderContainer,
  MobileNav,
  NavLink,
  TitleLogo,
} from "./styles";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <ContainerIcon>
        <img src="/logoicon.png" alt="terco" />
        <TitleLogo>Catálogo da fé</TitleLogo>
      </ContainerIcon>

      <DesktopNav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/books">Livros</NavLink>
        <NavLink href="/shirts">Camisetas</NavLink>
        <NavLink href="/thirds">Terços</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        {/* <NavLink href="/childrens">Infantil</NavLink> */}
      </DesktopNav>

      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <MobileNav isOpen={isOpen}>
        <NavLink href="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink href="/books" onClick={toggleMenu}>
          Livros
        </NavLink>
        <NavLink href="/shirts" onClick={toggleMenu}>
          Camisetas
        </NavLink>
        <NavLink href="/thirds" onClick={toggleMenu}>
          Terços
        </NavLink>
        <NavLink href="/childrens" onClick={toggleMenu}>
          Infantil
        </NavLink>
        <NavLink href="/sobre" onClick={toggleMenu}>
          Sobre
        </NavLink>
      </MobileNav>
    </HeaderContainer>
  );
};
