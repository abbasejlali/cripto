import React from "react";

// styles
import styles from "./CardCripto.module.css";

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
    <div className={styles.main}>
      <img src={image} alt="icon_cripto" />
      <h2>{name}</h2>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.price}>{current_price.toLocaleString()}</span>
      <span className={styles.market_cap}>{market_cap}</span>
      <span className={styles.price_change}>
        {price_change_percentage_24h.toLocaleString()}
      </span>
    </div>
  );
};

export default CardCripto;
