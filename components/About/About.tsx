"use client";
import React, { useState } from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrow.png";
import eth from "../../public/assets/ethereum.png";
import usdt from "../../public/assets/tether.png";
import usdc from "../../public/assets/usdc.png";

export default function About() {
  const [selectedToken, setSelectedToken] = useState("ETH");
  return (
    <div className="bgAbout">
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-rows md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-center">QBIT Presale</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center">
              <div className="border-4 border-[#8E00FE] px-3 md:px-12 py-12 md:py-12  rounded-3xl">
                <p className="text-center pb-8 font-semibold desktop:text-2xl laptop:text-2xl tablet:text-xl mobile:text-xl">
                  Buy QBIT Tokens
                </p>
                <form>
                  <div className="flex flex-col gap-8 items-center">
                    <div className="join">
                      <input
                        className="input input-bordered join-item w-[160px] md:w-fit"
                        placeholder="Enter Amount"
                      />
                      <div className="join-item">
                        {selectedToken == "ETH" && (
                          <Image
                            className="input input-bordered join-item w-full py-1"
                            src={eth}
                            alt="usdt"
                          />
                        )}

                        {selectedToken == "USDT" && (
                          <Image
                            className="input input-bordered join-item w-full py-1"
                            src={usdt}
                            alt="usdt"
                          />
                        )}

                        {selectedToken == "USDC" && (
                          <Image
                            className="input input-bordered join-item w-full py-1"
                            src={usdc}
                            alt="usdt"
                          />
                        )}
                      </div>

                      <select
                        className="select select-bordered join-item rounded-r-full"
                        onChange={(event) =>
                          setSelectedToken(event.target.value)
                        }
                      >
                        <option defaultValue={"ETH"}>ETH</option>
                        <option>USDT</option>
                        <option>USDC</option>
                      </select>
                      {/* <button className="btn join-item rounded-r-full">
                        USDT
                      </button> */}
                    </div>

                    <Image src={arrow} alt="swap" />

                    <div className="join">
                      <input
                        className="input input-bordered join-item w-[180px] md:w-fit"
                        value={"10000.00"}
                        readOnly
                      />
                      <div className="join-item">
                        <Image
                          className="input input-bordered join-item w-full py-1"
                          src={eth}
                          alt="usdt"
                        />
                      </div>
                      <button
                        disabled
                        className="btn join-item rounded-r-full bg-transparent"
                      >
                        QBIT
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center mt-8">
                    {/* {approving && (
                <button className="btn loading">Approving...</button>
              )}
              {swapping && <button className="btn loading">Swapping...</button>}
              {!swapping && !approving && ( */}
                    <button
                      type="submit"
                      className="px-16 py-3 bg-white text-black rounded-xl text-center"
                    >
                      {" "}
                      Buy{" "}
                    </button>
                    {/* )} */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
