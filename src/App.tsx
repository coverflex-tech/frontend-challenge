import { useState } from 'react';
import css from './App.module.css';
import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <div className={css.content}>
        <div className={css.buttonsWrapper}>
          {/* Search Button */}
          <Button>Search Discounts</Button>

          {/* Filters */}
          <div className={css.filters}>
            <span>Filters: </span>
            <Button fill="tertiary">All</Button>
            <Button fill="tertiary">Meal</Button>
            <Button fill="tertiary">Education</Button>
            <Button fill="tertiary">Health</Button>
          </div>
        </div>

        {/* Discount Cards (<DiscountCard/>)*/}
        <div className={css.cardsWrapper}>
          Render list of discount cards components!
        </div>
      </div>
    </div>
  );
};
