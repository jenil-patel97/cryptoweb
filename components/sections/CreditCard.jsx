import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Creditcard from "../../public/images/credit-card.png";
import SecondaryButton from "../buttons/SecondaryButton";

const CreditCard = () => {
  return (
    <div className="container mx-auto py-32 cursor-default">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image src={Creditcard} alt="cr" />
        </div>
        <div>
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Introducing the <span className="text-blue-gradient">NEFA</span>{" "}
            <br /> Credit Card
          </h2>
          <p className="text-gray text-[16px]">
            Subject to cardholder and rewards terms which will be available{" "}
            <br /> at application.
          </p>

          <ul className="my-6">
            <li className="mb-2">
              <CheckCircleIcon className="text-primary inline mr-2 w-[20px]" />
              Up to 3% back on purchases
            </li>
            <li className="mb-2">
              <CheckCircleIcon className="text-primary inline mr-2 w-[20px]" />
              Earn rewards in bitcoin or any crypto on NEFA
            </li>
            <li className="mb-2">
              <CheckCircleIcon className="text-primary inline mr-2 w-[20px]" />
              No annual fee
            </li>
          </ul>

          <SecondaryButton>Join the waitlist</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
