import React from 'react';

import { Bar } from './styles';

const TopBar = () => {
  const name = localStorage.getItem('name');

  return (
    <>
      <Bar>
        <h3>Bem vindo, {name}</h3>
      </Bar>
    </>
  );
};

export default TopBar;
