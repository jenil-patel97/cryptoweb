import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Security from "../../public/images/security.png";

const SecuritySectiom = () => {
  return (
    <div className="container mx-auto py-32 cursor-default">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image src={Security} alt="security" />
        </div>
        <div className="max-w-xl">
          <h2 className="font-bold text-3xl mb-6 leading-normal">
            Industry-leading security from <br /> day one
          </h2>
         
          <ul className="my-6">
            <li className="mb-6">
              <span className="hover:underline cursor-pointer">
                <CheckCircleIcon className="text-primary inline mr-2 w-[19px] " />
                Safety, security and compliance
              </span>
              <p className="text-gray mt-3">
                NEFA is a licensed New York trust company that undergoes regular
                bank exams and is subject to the cybersecurity audits conducted
                by the New York Department of Financial Services. Learn more
                about our commitment to security.
              </p>
            </li>
            <li className="mb-6">
              <span className="hover:underline cursor-pointer">
                <CheckCircleIcon className="text-primary inline mr-2 w-[19px]" />
                Hardware security keys
              </span>
              <p className="text-gray mt-3">
                With NEFA you can secure your account with a hardware security
                key via WebAuthn.
              </p>
            </li>
            <li className="mb-6">
              <span className="hover:underline cursor-pointer">
                <CheckCircleIcon className="text-primary inline mr-2 w-[19px]" />
                SOC Certifications
              </span>
              <p className="text-gray mt-3">
                NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                world’s first cryptocurrency exchange and custodian to complete
                these exams.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecuritySectiom;
