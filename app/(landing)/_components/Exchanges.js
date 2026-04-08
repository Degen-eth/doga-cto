import React from "react";
import Flag from "@/components/Flag";

const exchanges = [
  {
    flag: "PumpFun",
    title: "Etherscan",
    link: "https://etherscan.io/token/0x72C6ec45873E49338EA37Bd969461d877ac000A9",
  },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          Exchanges
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          probably nothing 🤔
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-flow-col gap-5 gap-y-20 justify-center justify-items-center">
        {exchanges.map((ex, idx) => (
          <div key={idx} className="shrink-0">
            <Flag props={ex} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
