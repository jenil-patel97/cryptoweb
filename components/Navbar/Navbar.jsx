import Image from "next/image";
import logo from "../../public/logo.svg";
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from "../buttons/SecondaryButton";

const Navbar = () => {
    return (
        <div className="fixed top-0 py-8 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={logo} width={92} height={62} className='mr-6' alt="logo" />
                    <nav className="flex">
                        <a className="mx-6 hover:text-primary cursor-pointer">Crytocurrency</a>
                        <a className="mx-6 hover:text-primary cursor-pointer">Exchanges</a>
                        <a className="mx-6 hover:text-primary cursor-pointer">Watchlist</a>
                        <a className="mx-6 hover:text-primary cursor-pointer">NFT</a>
                        <a className="mx-6 hover:text-primary cursor-pointer">Portfolio</a>
                        <a className="mx-6 hover:text-primary cursor-pointer">Products</a>
                    </nav>
            </div>
            <div className="flex">
                <SecondaryButton>
                    Log In
                </SecondaryButton>
                <PrimaryButton>
                    Sign Up
                </PrimaryButton>
            </div>
        </div>
    );
};

export default Navbar;
