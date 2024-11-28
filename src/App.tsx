import { GreaterVariation } from "./components/charts/GreaterVariation";
import { MarketCapComparison } from "./components/charts/MarketCapComparison";
import { PercentageExchangeVariation } from "./components/charts/PercentageExchangeVariation";
import { PriceHistory } from "./components/charts/PriceHistory";
import { UpdatedPrice } from "./components/charts/UpdatedPrice";
import { UpdatedVolume } from "./components/charts/UpdatedVolume";
import { Filters } from "./components/filters";
import { Header } from "./components/header";

import "./index.css";

export const App = () => {
  return (
    <>
      <Header />

      <div className="mx-auto my-0 flex max-w-7xl flex-col space-y-5 px-5 pb-5 md:grid md:flex-none md:grid-cols-12 md:gap-5 md:space-y-0">
        <div className="col-span-12">
          <Filters />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <UpdatedPrice />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <UpdatedVolume />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <PercentageExchangeVariation />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <PriceHistory />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <MarketCapComparison />
        </div>

        <div className="col-span-4 rounded p-5 shadow-2xl">
          <GreaterVariation />
        </div>
      </div>
    </>
  );
};
