import Image from "next/image";

import SignUp from "../../public/images/signup.png";
import Wallet from "../../public/images/wallet.png";
import Buy from "../../public/images/buy.png";
import Arrow from "../../public/images/Arrow.png";

const StepSection = () => {
  return (
    <div className="px-6 bg-gradient-to-b from-[#FFFFFF] to-[#e7edf5]">
      <div className="container mx-auto text-center">
        <h2 className="font-bold text-2xl mb-4 leading-normal cursor-default">
          Get started in just a few minutes
        </h2>
        <div className="flex justify-center gap-20">
          <div className="text-center relative">
            <div className="relative">
              <Image src={SignUp} className="mb-4 mx-auto" alt="sign" />
              <div className="absolute top-1/2 -right-1/3">
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 hover:underline cursor-pointer">Sign Up</h3>
            <p className="text-gray max-w-sm text-base cursor-default">
              Buy Bitcoin or Ethereum, then securely <br /> store it in your Wallet or
              send it on easily to friends.
            </p>
          </div>

          <div className="text-center relative">
            <div className="relative">
              <Image src={Wallet} className="mb-4 mx-auto" alt="wallet" />
              <div className="absolute top-1/2 -right-1/3">
                <Image src={Arrow} alt="arrow" />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-4 hover:underline cursor-pointer">Fund</h3>
            <p className="text-gray max-w-sm text-base cursor-default">
              Choose your preferred payment method <br /> such as bank transfer or
              credit card to top <br /> up your NEFA Wallet
            </p>
          </div>

          <div className="text-center relative">
            <Image src={Buy} className="mb-4 mx-auto" alt="buy" />
            <h3 className="text-xl font-medium mb-4 hover:underline cursor-pointer">Buy Crypto</h3>
            <p className="text-gray max-w-sm text-base cursor-default">
              Sign up for your free NEFA Wallet on web, iOS <br /> or Android and
              follow our easy process to <br /> set up your profile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
