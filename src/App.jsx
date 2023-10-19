import { BasicTable } from './components/BasicTable';
import { Header } from './components/Header';
import { useCoingeckoFetch } from './context/useCoingeckoFetch';

const App = () => {
  const Api_Url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  const { coins, setCoins, refresh, setRefresh } = useCoingeckoFetch(Api_Url);

  const refreshQuery = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCoins(data));
    setRefresh(true);
    setTimeout(() => setRefresh(false), 8000);
  };

  return (
    <>
      <Header
        action={() => refreshQuery(Api_Url)}
        refresh={refresh}
      />
      <BasicTable coins={coins} />
    </>
  );
};

export { App };
