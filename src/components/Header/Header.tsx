import React from 'react';

import css from './Header.module.css';
import CoverflexLogo from '../Icons/CoverflexLogo';

export const Header = () => {
  return (
    <div className={css.header}>
      <CoverflexLogo />
      <div>Coverflex Frontend Challenge</div>
    </div>
  );
};
