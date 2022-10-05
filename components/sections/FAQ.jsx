import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import FAQ from "../../public/images/FAQ.png";

const FAQSection = () => {
  return (
    <div className="container mx-auto py-32 cursor-default">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image src={FAQ} alt="security" />
        </div>
        <div className="">
          <span className="text-primary underline cursor-pointer">SUPPORT</span>
          <h2 className="font-bold text-3xl mb-6 leading-normal">
            Frequently asked questions
          </h2>
          <ul className="my-6">
            <li className="mb-3 border-b border-lightgray pb-3">
              <div className="flex justify-between py-3 hover:underline cursor-pointer">
                Why should I choose NEFA?
                <ChevronUpIcon className="w-[15px]" />
              </div>
              <p className="text-gray mt-3">
                We are industry pioneers, having been in the cryptocurrency
                industry since 2016. We have facilitated more than 21 billion
                USD worth of transactions on our exchange for customers in over
                40 countries. Today, we are trusted by over 8 million customers
                around the world and have received praise for our easy-to-use
                app, secure wallet, and range of features.
              </p>
            </li>
            <li className="mb-3 border-b border-lightgray pb-3">
              <div className="flex justify-between py-3 hover:underline cursor-pointer">
                How secure is NEFA?
                <ChevronDownIcon className="w-[15px]" />
              </div>
            </li>
            <li className="mb-3 border-b border-lightgray pb-3">
              <div className="flex justify-between py-3 hover:underline cursor-pointer">
                Do I have to buy a whole Bitcoin?
                <ChevronDownIcon className="w-[15px]" />
              </div>
            </li>
            <li className="mb-3 border-b border-lightgray pb-3">
              <div className="flex justify-between py-3 hover:underline cursor-pointer">
                How do I actually buy Bitcoin?
                <ChevronDownIcon className="w-[15px]" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
