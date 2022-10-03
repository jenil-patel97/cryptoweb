import emoji from "react-easy-emoji";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

import CoinRow from "./CoinRow";

const CoinList = ({ title, more, data }) => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <span className="font-bold text-lg">
          {emoji(title, {
            props: { style: { display: "inline", height: "1em" } },
          })}
        </span>
        <a className="text-primary font-medium" href={more}>
          More
          <ChevronRightIcon className="inline ml-1" width={20} />
        </a>
      </div>
      <div>
        <div className="grid grid-cols-3 mb-4">
          <span className="text-gray">Name</span>
          <span className="text-gray">Price</span>
          <span className="text-gray">Chart</span>
        </div>
        {data?.map(({ image, name, price, upTrend }) => {
          return (
            <CoinRow
              key=""
              image={image}
              coinName={name}
              coinPrice={price}
              coinUpTrend={upTrend}
            />
          );
        })}
      </div>
    </>
  );
};

export default CoinList;
