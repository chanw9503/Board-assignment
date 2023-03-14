import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledP } from './styles';

function Header() {
  const navigate = useNavigate();
  const handlerClickHome = () => {
    navigate('/');
  };
  return (
    <StyledHeader>
      <StyledP onClick={handlerClickHome}>Home</StyledP>
      <StyledP>이것은 말이여</StyledP>
    </StyledHeader>
  );
}

export default Header;
