import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  width: 8rem;
  cursor: pointer;
`;

export const NavLinksContainer = styled.ul`
  // width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 500;
`;
