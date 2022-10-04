import Image from "next/image";
import BuyIcon from "../../public/images/buy-icon.png";
import PrimaryButton from "../buttons/PrimaryButton";
import USA from "../../public/images/usd.png";
import BTC from '../../public/images/BTC.png'
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Trade = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-10">
        <div className="px-10">
          <h2 className="font-bold text-3xl mt-[150px] leading-normal">
            Buy & trade on the <br /> original crypto exchange.
          </h2>
          <p className="text-gray mt-6">
            Buy now and get 40% extra bonus Minimum pre-sale amount <br /> 25
            Crypto Coin. We accept BTC crypto-currency
          </p>

          <div className="flex justify-between gap-6 mt-6">
            <div className="border border-primary rounded-2xl py-4 px-6 flex items-center">
              <div className="border-r border-primary pr-6">
                <small className="text-primary">Amount</small>
              </div>
              <input
                type="text"
                value="5,000"
                className="text-right outline-none"
              />
            </div>
            <div className="border border-primary rounded-2xl py-4 px-6 flex">
              <Image src={USA} width={25} alt="usa" className="inline mr-2" />
              <span className="ml-2">USD</span>
              <ChevronDownIcon className="ml-2" width={20}/>
            </div>
          </div>

          <div className="flex justify-between gap-6 mt-6">
            <div className="border border-primary rounded-2xl py-4 px-6 flex items-center">
              <div className="border-r border-primary pr-14">
                <small className="text-primary">Get</small>
              </div>
              <input
                type="text"
                value="0.10901"
                className="text-right outline-none"
              />
            </div>
            <div className="border border-primary rounded-2xl py-4 px-6 flex">
              <Image src={BTC} width={25} alt="usa" className="inline mr-2" />
              <span className="ml-2">BTC</span>
              <ChevronDownIcon className="ml-2" width={20}/>
            </div>
          </div>

          <PrimaryButton className="w-full mt-6 bg-blue rounded-full text-white py-2">
            Buy Now
          </PrimaryButton>
        </div>
        <div>
          <Image src={BuyIcon} alt="buy" />
        </div>
      </div>
    </div>
  );
};

export default Trade;
