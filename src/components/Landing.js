import React, { useEffect, useState } from "react";

// API
import { getAPI } from "../Servies/api";

// components
import Loading from "./Loading";
import CardCripto from "./CardCripto";

const Landing = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await getAPI();
      setCoin(api);
    };

    fetchAPI();
  }, [coin]);

  return (
    <>
      {console.log(coin)}
      <input type="text" placeholder="enter cripto name" />
      <div>
        {coin.length ? (
          coin.map((coin) => <CardCripto key={coin.id} coin={coin} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Landing;
