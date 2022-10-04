import {
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/solid";
import upchart from "../../public/images/up-chart.png";
import downchart from "../../public/images/down-chart.png";
import Image from "next/image";

const CoinRow = ({ image, coinName, coinPrice, coinUpTrend }) => {
  return (
    <div className="grid grid-cols-3 mb-2 py-2 border-b border-lightgray last:border-none">
      <div className="flex items-center -ml-[2px]">
        <Image alt="bit" src={image} width={22} draggable="false" height={22} />
        <div className="ml-2">{coinName}</div>
      </div>
      <div className="flex items-center">
        {coinUpTrend ? (
          <PlusSmallIcon className="text-green mr-1" />
        ) : (
          <MinusSmallIcon className="text-red mr-1" />
        )}

        <div className="mr-5">{coinPrice}</div>
      </div>
      <div>
        <Image src={coinUpTrend ? upchart : downchart} alt="states" />
      </div>
    </div>
  );
};

export default CoinRow;
