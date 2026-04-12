import React from "react";
import Image from "next/image";

const exchanges = [
  {
    img: "pump.png",
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
          <a key={idx} href={ex.link} target="_blank" className="shrink-0 group relative">
            <div className="relative w-80 h-80 flex justify-center items-center border-2 border-black rounded-xl bg-white hover:bg-duis transition-colors">
              <Image
                src={`/${ex.img}`}
                alt={ex.title}
                width={300}
                height={300}
                unoptimized
                className="h-2/3 w-2/3 object-contain"
              />
            </div>
            <div className="transition-opacity duration-300 absolute inset-0 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 flex justify-center items-center rounded-xl">
              <h3 className="font-bold text-3xl text-duis">{ex.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Exchanges;
