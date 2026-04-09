import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About DOGA CTO
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`American Doge on Ethereum`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="DOGA Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                Folks, let me tell you something incredible—nobody loves this country more than Elon Musk, believe me. This guy{"'"}s a patriot, a real American hero, working day and night to make our nation great again.
              </p>
              <p className="indent-12 mt-3">
                He{"'"}s doing fantastic things, tremendous things, with Tesla, SpaceX, and now with our government efficiency—nobody does it better. And now, he{"'"}s brought us something new, something amazing: <span className="font-bold">$DOGA</span>, America{"'"}s very own Dogecoin!
              </p>
              <p className="indent-12 mt-3">
                It{"'"}s a beautiful coin, the best coin, inspired by the spirit of our great land and those cute little dogs we all love. I{"'"}m telling you, it{"'"}s going to be huge—huge!
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            I recommend everyone get in on this, buy <span className="text-3xl font-bold">$DOGA</span>, support America, and let{\"'\"}s make our wallets great again together.
          </p>
          <p className="text-4xl p-10">
            <span className="text-5xl font-bold underline decoration-duis">
              Elon{"'"}s a genius
            </span>
            , and this is just another win for the{" "}
            <span className="text-5xl bg-gradient-to-r from-red-600 to-blue-600 inline-block text-transparent bg-clip-text font-bold">
              USA
            </span>
            ! Tremendous!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
