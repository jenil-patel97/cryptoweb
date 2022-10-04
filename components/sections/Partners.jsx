import Image from "next/image";

import Partner1 from "../../public/images/partner-1.png";
import Partner2 from "../../public/images/partner-2.png";
import Partner3 from "../../public/images/partner-3.png";
import Partner4 from "../../public/images/partner-4.png";

const Partners = () => {
  return (
    <div className="px-6 mt-[230px] bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF]">
      <div className="">
        <div className="container mx-auto">
          <div className="text-center cursor-default">
            <h2 className="text-3xl font-semibold mb-4">
              Trusted Partners Worldwide
            </h2>
            <p className="text-gray">
              We are partners with countless major organisations around the
              globe
            </p>
          </div>
          <div className="my-10">
            <div className="flex justify-center gap-6">
              <Image src={Partner1} alt="P1" />
              <Image src={Partner2} alt="P2" />
              <Image src={Partner3} alt="P3" />
              <Image src={Partner4} alt="P4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
