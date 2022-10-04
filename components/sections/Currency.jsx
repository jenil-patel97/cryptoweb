import CoinList from "../CoinList";
import bitCoin from "../../public/images/bitcoin.png";
import Etherium from '../../public/images/Etherium.png'
import Solana from '../../public/images/solana.png'
import Dogo from '../../public/images/dogo.png'
import Pappay from '../../public/images/pappay.svg'
import BitAsia from '../../public/images/bit-asia.png'
import MoonRock from '../../public/images/moon-rock.png'
import Ninja from '../../public/images/ninja.png'
import Meta from '../../public/images/meta.png'
import Frog from '../../public/images/frog.png'
import Musk from '../../public/images/musk.png'
import Share from '../../public/images/2-share.png'

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
const gainersCoins = [
  
  {
    image: { Pappay },
    name: "PAPPAY",
    price: "$0.00374",
    upTrend: true,
  },
  {
    image: { BitAsia },
    name: "BitcoinAsia",
    price: "$0.20096",
    upTrend: false,
  },
  {
    image: { MoonRock },
    name: "MoonRock",
    price: "$0.04907",
    upTrend: true,
  },
  {
    image: { Ninja },
    name: "NinjaFloki",
    price: "$0.000123",
    upTrend: true,
  },
];
const recentCoins = [
  
  {
    image: { Meta },
    name: "Metacraft",
    price: "$0.00608",
    upTrend: false,
  },
  {
    image: { Frog  },
    name: "Frog",
    price: "$0.05875",
    upTrend: false,
  },
  {
    image: { Musk },
    name: "MuskDoge",
    price: "$0.04041",
    upTrend: true,
  },
  {
    image: { Share },
    name: "2 SHARE",
    price: "$1,366.24",
    upTrend: true,
  },
];

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
