import Image from "next/image";

import Tradingtool from "../../public/images/trading.png";
import SecondaryButton from "../buttons/SecondaryButton";

const TradingTool = () => {
  return (
    <div className="px-6 ml-5 bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="text-base">
            <h2 className="font-bold text-3xl mb-6 leading-normal cursor-default">
              Advanced Trading <span className="text-blue-gradient">Tools</span>{" "}
            </h2>
            <div className="mb-6">
              <h3 className="font-medium text-base mb-4 hover:underline cursor-pointer">
                Professional Access, Non-stop Availability
              </h3>
              <p className="text-gray cursor-default">
                We provide premium access to crypto trading for both <br />{" "}
                individuals and institutions through high liquidity, reliable{" "}
                <br /> order execution and constant uptime.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-base mb-4 hover:underline cursor-pointer">
                A Range of Powerful Apis
              </h3>
              <p className="text-gray cursor-default">
                Set up your own trading interface or deploy your algorithmic{" "}
                <br />
                strategy with our high-performance FIX and HTTP APIs. <br />{" "}
                Connect to our WebSocket for real-time data streaming.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-base mb-4 hover:underline cursor-pointer">Customer Support</h3>
              <p className="text-gray cursor-default">
                Premium 24/7 support available to all customers worldwide by{" "}
                <br /> phone or email. Dedicated account managers for partners.
              </p>
            </div>
            <SecondaryButton>Get Started</SecondaryButton>
            <button className="py-4 px-10 text-primary hover:underline">Learn More</button>
          </div>
          <div className="-mt-4">
            <Image src={Tradingtool} alt="trading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingTool;
