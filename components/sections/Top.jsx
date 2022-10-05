import { ArrowUpIcon } from "@heroicons/react/24/solid";

const Top = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center">
      <button onClick={goToBtn} className="flex items-center mb-3 bg-[black] text-white rounded-xl py-4 px-6 cursor-pointer">
        Back to Top <ArrowUpIcon className="w-[18px] ml-2" />
      </button>
    </div>
  );
};

export default Top;
