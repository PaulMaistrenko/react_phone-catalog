/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import { Slider } from '../../components/Slider';
import { ShopByCategory } from '../../components/ShopByCategory';
import { Promo } from '../../components/Promo';
import './home-page.scss';
import { MainContext } from '../../context';

export const HomePage = () => {
  const {
    products,
  } = useContext(MainContext);

  return (
    <>
      <Slider />

      <div className="home-list__wrapper">
        <Promo
          title="Hot prices"
          products={products}
        />
      </div>

      <ShopByCategory />

      <div className="home-list__wrapper">
        <Promo
          title="Brand new models"
          products={products}
        />
      </div>
    </>
  );
};
