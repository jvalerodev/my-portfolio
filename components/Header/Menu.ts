import styled from 'styled-components';

export const NavMenu = styled.nav<{ active: boolean }>`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  top: 90px;
  left: -200%;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1rem 0;
  row-gap: 10px;

  ${({ active }) =>
    active &&
    `
    @media (max-width: 1023px) {
      background-color: rgb(34, 197, 94);
      left: 0;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }
  `}
`;

export const NavItem = styled.p`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 5px;
  font-weight: bold;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
