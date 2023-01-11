import React, { useEffect, useState } from "react";

// API
import { getAPI } from "../Servies/api";

// components
import Loading from "./Loading";
import CardCripto from "./CardCripto";

const Landing = () => {
  const [coin, setCoin] = useState([]);

  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchAPI = async () => {
      const api = await getAPI();
      setCoin(api);
    };

    fetchAPI();
  }, []);

  const changeHandeler = (e) => {
    setSearch(e.target.value);
  };

  const search_betting = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {console.log(search_betting)}
      <input
        type="text"
        placeholder="enter cripto name"
        value={search}
        onChange={changeHandeler}
      />
      <div>
        {coin.length ? (
          search_betting.map((coin) => <CardCripto key={coin.id} coin={coin} />)
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Landing;
