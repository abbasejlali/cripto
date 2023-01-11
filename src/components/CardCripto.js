import React from "react";

const CardCripto = ({ coin }) => {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = coin;
  return (
    <div>
      <img src={image} alt="icon_cripto" />
      <span>{name}</span>
      <span>{symbol}</span>
      <span>{current_price}</span>
      <span>{market_cap}</span>
      <span>{price_change_percentage_24h}</span>
    </div>
  );
};

export default CardCripto;
