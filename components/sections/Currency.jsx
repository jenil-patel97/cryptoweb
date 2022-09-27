
import CoinList from "../CoinList";

const Currency = () => {
  return (
    <section className="-mt-10">
      <div className="container mx-auto rounded-3xl bg-white py-8 px-4 shadow">
        <div className="grid grid-cols-3">
          <div className="px-4">
            <CoinList title='🔥 Trending'/>
          </div>
          <div className="px-4">ok</div>
          <div className="px-4">ok</div>
        </div>
      </div>
    </section>
  );
};

export default Currency;
