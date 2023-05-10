import { NavLink } from 'react-router-dom';
// import cslx from 'cslx';
import styled from "styled-components";


const StyledNavLink = styled(NavLink)`
display: flex;
  align-items: center;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  border: 1px solid rgb(232, 235, 232);
  border-radius: 8px;

  &.active {
    border-color: red;
    color: orange;
  }`;


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <StyledNavLink to='/'>Home</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/movies">Movies</StyledNavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;