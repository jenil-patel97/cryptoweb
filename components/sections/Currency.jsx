import CoinList from "../CoinList";
import bitCoin from "../../public/images/bitcoin.png";
import Etherium from '../../public/images/Etherium.png'
import Solana from '../../public/images/solana.png'
import Dogo from '../../public/images/dogo.png'

const trendingCoins = [
  {
    image: { bitCoin },
    name: "Bitcoin",
    price: "$43,180.13",
    upTrend: true,
  },
  {
    image: { Etherium },
    name: "Ethereum",
    price: "$3,480.65",
    upTrend: false,
  },
  {
    image: { Solana },
    name: "Solona",
    price: "$15,150.20",
    upTrend: true,
  },
  {
    image: { Dogo },
    name: "Dogecoin",
    price: "$00,15.720",
    upTrend: true,
  },
];
const gainersCoins = [];
const recentCoins = [];

const Currency = () => {
  return (
    <section className="-mt-10">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <CoinList title="🔥 Trending" data={trendingCoins} />
          </div>
          <div className="px-4">
            <CoinList title="🚀  Top Gainers" data={gainersCoins} />
          </div>
          <div className="px-4">
            <CoinList title="💎  Recently Added" data={recentCoins} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Currency;
