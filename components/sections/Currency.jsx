import emoji from "react-easy-emoji";
import {
  ChevronRightIcon,
  PlusSmallIcon,
  MinusSmallIcon,
} from "@heroicons/react/24/solid";
import bitCoin from "../../public/images/bitcoin.png";
import Image from "next/image";

const Currency = () => {
  return (
    <section className="-mt-10">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">
                {emoji("🔥 Trending", {
                  props: { style: { display: "inline", height: "1em" } },
                })}
              </span>
              <a className="text-primary font-medium" href="#">
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
              <div className="grid grid-cols-3">
                <div>
                  <Image alt="bit" src={bitCoin} />
                  Bitcoin
                </div>
                <div className="flex items-center">
                  <PlusSmallIcon
                    width={25}
                    className="text-green inline mr-2"
                  />
                  $43,180.13
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">ok</div>
          <div className="px-4">ok</div>
        </div>
      </div>
    </section>
  );
};

export default Currency;
