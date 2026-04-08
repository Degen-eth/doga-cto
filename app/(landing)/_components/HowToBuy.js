import React from "react";
import OrderCard from "@/components/OrderCard";
import ContractAddress from "@/components/ContractAddress";

const HowToBuy = () => {
  return (
    <div id="buy" className="max-w-[85rem] mx-auto p-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center">
          How To Buy
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-black">
          {`Just 4️⃣ steps to get rich 🤑`}
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 justify-items-center">
        <OrderCard order={1} title={"create a wallet"} style={"rotate-3"}>
          <span>
            Download{" "}
            <a
              href="https://metamask.io"
              target="_blank"
              className="uppercase font-extrabold text-[#f6851b] text-2xl"
            >
              MetaMask
            </a>{" "}
            or your preferred{" "}
            <span className="bg-gradient-to-r from-[#627eea] to-[#764eee] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              Ethereum
            </span>{" "}
            wallet and follow the simple steps to create a new account.
          </span>
        </OrderCard>
        <OrderCard order={2} title={"add eth to wallet"} style={"\-rotate-6"}>
          <span>
            If you don't have any{" "}
            <span className="bg-gradient-to-r from-[#627eea] to-[#764eee] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $ETH
            </span>
            , you can buy directly on{" "}
            <a
              href="https://metamask.io"
              target="_blank"
              className="uppercase font-extrabold text-[#f6851b] text-2xl"
            >
              MetaMask
            </a>{" "}
            , transfer from another wallet, or buy on an exchange and send
            it to your wallet.
          </span>
        </OrderCard>
        <OrderCard order={3} title={"swap $ETH for $DOGA"} style={"\-rotate-1"}>
          <span>
            Paste the token address (CA) into any DEX like{" "}
            <span className="bg-gradient-to-r from-[#627eea] to-[#764eee] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              Uniswap
            </span>{" "}
            and swap{" "}
            <span className="bg-gradient-to-r from-[#627eea] to-[#764eee] inline-block text-transparent bg-clip-text uppercase font-extrabold text-2xl">
              $ETH
            </span>{" "}
            for <span className="font-extrabold text-2xl text-duis">$DOGA</span>
            .{`There's zero taxes so you don’t need to worry.`}
          </span>
        </OrderCard>
        <OrderCard order={4} title={"you're a DOGA holder!"} style={"rotate-2"}>
          <span>
            Welcome to the <br />
            <span className="uppercase font-extrabold text-2xl underline decoration-duis">
              DOGA community
            </span>
            ! Make America great again!
          </span>
        </OrderCard>
      </div>

      <div className="my-16">
        <ContractAddress />
      </div>
    </div>
  );
};

export default HowToBuy;
