import React, { useEffect, useState } from "react";

// API
import getAPI from "../Servies/api.js";

const Landing = () => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const api = await getAPI();
      setCoin(api);
    };

    fetchAPI();
  }, []);

  return <div>{console.log(coin)}</div>;
};

export default Landing;
