import Image from "next/image";
import logo from "../../public/logo.svg";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const Navbar = () => {
  return (
    <nav className="bg-primary bg-opacity-5">
      <div className="sticky container mx-auto top-0 py-8 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logo}
            width={92}
            height={62}
            className="mr-6"
            alt="logo"
          />
          <div className="flex">
            <a className="mx-14 hover:text-primary cursor-pointer">
              Crytocurrency
            </a>
            <a className="mx-8 hover:text-primary cursor-pointer">Exchanges</a>
            <a className="mx-8 hover:text-primary cursor-pointer">Watchlist</a>
            <a className="mx-8 hover:text-primary cursor-pointer">NFT</a>
            <a className="mx-8 hover:text-primary cursor-pointer">Products</a>
          </div>
        </div>
        <div className="flex ml-[55px]">
          <SecondaryButton>Log In</SecondaryButton>
          <PrimaryButton>Sign Up</PrimaryButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
