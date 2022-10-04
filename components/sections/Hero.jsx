import Image from "next/image";
import CryptoGlobe from "../../public/images/globe.png";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const Hero = () => {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="container mx-auto grid grid-cols-2 cursor-pointer">
        <div className="flex items-center">
          <div>
            <p className="text-primary font-bold text-[20px]">SIGN UP TODAY</p>
            <h1 className="text text-5xl font-bold leading-normal">
              The World’s
            </h1>
            <h1 className="text text-5xl font-bold leading-normal text-blue-gradient">
              Fastest Growing
            </h1>
            <h1 className="text text-5xl font-bold leading-normal">
              Crypto Web App
            </h1>
            <div className="mt-4 mb-8">
              <p className="text-[#666666] text-[18px]">
                Buy and sell 200+ cryptocurrencies with 20+ flat currencies
                using <br />
                bank transfers or your credit/debit card.
              </p>
            </div>

            <div className="flex">
              <PrimaryButton>Get Started</PrimaryButton>
              <SecondaryButton>Download App</SecondaryButton>
            </div>
          </div>
        </div>
        <div>
          <Image src={CryptoGlobe} alt="globe" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
