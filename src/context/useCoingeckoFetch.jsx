import React from 'react';
import { useState, useEffect } from 'react';

export const useCoingeckoFetch = (url) => {
  const [coins, setCoins] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  return {
    coins,
    setCoins,
    refresh,
    setRefresh,
  };
};
