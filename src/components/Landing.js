import React, { useEffect, useState } from "react";

// API
import { getAPI } from "../Servies/api";

const Landing = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await getAPI();
      setCoin(api);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <input type="text" placeholder="enter cripto name" />
      <div>
        {coin.map((coin) => (
          <p key={coin.id}>{coin.name}</p>
        ))}
      </div>
    </>
  );
};

export default Landing;
