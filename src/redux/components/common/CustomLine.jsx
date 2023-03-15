import React from 'react';
import styled from 'styled-components';

const CustomLine = ({ thick, color }) => {
  return <Line thick={thick} color={color} />;
};

const Line = styled.div`
  border-top: ${(props) => props.thick || '3px'} solid
    ${(props) => props.color || 'black'};

  margin-top: 2px;
  margin-bottom: 2px;
  width: 100%;
`;

export default CustomLine;
