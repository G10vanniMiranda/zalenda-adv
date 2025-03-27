"use client";

import { Logo } from "@/components/logo";
import { Zap } from "@/components/zap/Zap";

export default function Home() {
  return (
    <div
      className="flex justify-around items-center flex-col w-screen h-screen bg-yellow-700 relative "
      data-aos="fade-up"
    >
      {/* 1. sessão pronto */}
      <div className="">
        <Logo />
      </div>

      <div className="flex flex-col gap-3">

        <div className="relative z-10 flex flex-col justify-center items-center text-center gap-4 text-white">
          <div className=" bg-zinc-900/30 p-3 h-auto rounded-md leading-snug mx-5">
            <h3 className=" text-lg md:2xl">
              Precisando de um especialisata em
            </h3>

            <h3 className="text-yellow-400 font-semibold">
              {" "}
              DIREITO BANCARIO?{" "}
            </h3>

            <p className="font-normal text-md md:text-lg">
              Descubra se você está pagando juros abusivos ou taxas indevidas.
            </p>
          </div>
        </div>

      </div>

      <Zap />
    </div>
  );
}
