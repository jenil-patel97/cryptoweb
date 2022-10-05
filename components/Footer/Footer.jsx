import Image from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import logo from "../../public/images/logo.png";
import PrimaryButton from "../buttons/PrimaryButton";

const Footer = () => {
  return (
    <footer>
      <div className="container border-y mt-5 border-lightgray py-6">
        <div className="grid grid-cols-4">
          <div className="flex justify-between p-6 border-r border-lightgray">
            <div>
              <Image src={logo} alt="logo" />
            </div>

            <ul>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Buy Crypto
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Exchanges
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Watchlist
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Portfolio
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  NFT
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 flex justify-center border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Products
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Abous Us
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Blog
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div className="p-6 flex justify-center border-r border-lightgray">
            <ul>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Help Center
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Contact Us
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  System Status
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Area of Avaibility
                </a>
              </li>
              <li className="mb-4">
                <a href="" className="text-gray">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="p-6">
            <span className="text-gray font-medium underline cursor-pointer">Newsletter</span>
            <p className="text-gray font-light mt-4 text-base cursor-default">
              Never miss anything crypto when you are on the go
            </p>
            <div className="flex gap-4 my-4">
              <input
                type="email"
                className="border border-lightgray rounded-xl p-3 outline-none focus:border-primary"
                placeholder="Enter your email"
              />
              <PrimaryButton className="px-4 aspect-square rounded-xl bg-primary">
                <ArrowSmallRightIcon width={25} color="white"/>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">
          © Copyright 2022 NEFA LLC. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
