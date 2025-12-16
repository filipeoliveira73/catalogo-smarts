import styled from "styled-components";
import Link from "next/link";

export const HeaderContainer = styled.header`
  background-color: var(--secondary-color);
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 100;
`;

export const TitleLogo = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.2s ease-in-out;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--primary-color);
  }
`;

export const DesktopNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
  }
`;

export const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  background-color: var(--secondary-color);
  padding: 6rem 2rem 2rem;
  transition: right 0.3s ease-in-out;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  display: block;
  cursor: pointer;
  z-index: 101;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px 0;
    background-color: #fff;
    transition: 0.4s;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  img {
    border-radius: 100%;

    @media (min-width: 768px) {
      width: 40px;
      height: 36px;
    }

    @media (max-width: 767px) {
      width: 32px;
      height: 30px;
    }
  }
`;
