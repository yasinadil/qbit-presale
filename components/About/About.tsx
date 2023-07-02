"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Button } from "@thirdweb-dev/react";
import { ToastContainer, toast } from "react-toastify";
import { qbitAddress, usdtAddress, usdcAddress } from "@/Config/Config";
import Image from "next/image";
import arrow from "../../public/assets/arrow.png";
import eth from "../../public/assets/ethereum.png";
import usdt from "../../public/assets/tether.png";
import usdc from "../../public/assets/usdc.png";
import qbit from "../../public/assets/qbitLogo.png";
import { useAddress } from "@thirdweb-dev/react";
import { useBalance } from "@thirdweb-dev/react";

import "react-toastify/dist/ReactToastify.css";

const qbitABI = require("../ABI/qbitABI.json");
const usdABI = require("../ABI/usdABI.json");

export default function About() {
  const address = useAddress();
  const { data: usdtBalance, isLoading: isLoadingUSDTBalance } =
    useBalance(usdtAddress);
  const { data: usdcBalance, isLoading: isLoadingUSDCBalance } =
    useBalance(usdcAddress);
  const [selectedToken, setSelectedToken] = useState(0);
  const [usdtApproved, isUsdtApproved] = useState(false);
  const [usdcApproved, isUsdcApproved] = useState(false);
  const [amount, setAmount] = useState("1");
  const [qbitAmount, setQbitAmount] = useState("loading . . .");
  const [ethBalance, setEthBalance] = useState("0");
  const [qbitBoughtByUser, setQbitBoughtByUser] = useState("0");
  const [bought, setBought] = useState(false);

  useEffect(() => {
    async function loadBalances() {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL
      );
      const qbitContract = new ethers.Contract(qbitAddress, qbitABI, provider);
      const ethbal = await provider.getBalance(address!);
      setEthBalance(ethers.utils.formatEther(ethbal.toString()));
      const qbitBuy = await qbitContract.qbitInvestment(address!);
      setQbitBoughtByUser(ethers.utils.formatEther(qbitBuy.toString()));
      setBought(false);
    }

    if (address) {
      loadBalances();
    }
  }, [address, usdtBalance, usdcBalance, bought]);

  useEffect(() => {
    async function loadPrice() {
      setQbitAmount("loading . . .");
      setTimeout(async () => {
        if (amount != "") {
          const provider = new ethers.providers.JsonRpcProvider(
            process.env.NEXT_PUBLIC_RPC_URL
          );
          const qbitContract = new ethers.Contract(
            qbitAddress,
            qbitABI,
            provider
          );

          if (selectedToken == 0) {
            const ETHinUSD = await qbitContract.getConversionRate(
              ethers.utils.parseEther(amount)
            );
            const qbitAmount = await qbitContract.getQBITSaleAmountForETH(
              ETHinUSD
            );
            const formattedQBIT = Number(qbitAmount) / 10 ** 18;

            setQbitAmount(Number(formattedQBIT).toFixed(2));
          } else {
            const amountFormatted = ethers.utils.parseEther(amount);

            const qbitAmount =
              (Number(amountFormatted) * 10 ** 30) / 118340000000000000;

            const formattedQBIT = Number(qbitAmount) / 10 ** 30;

            setQbitAmount(Number(formattedQBIT).toFixed(2));
          }
        } else {
          setQbitAmount("");
          //commit
        }
      }, 500);
    }
    loadPrice();
  }, [selectedToken, amount]);

  return (
    <div className="bgAbout">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      {/* //px-3 md:px-12 py-12 md:py-12 */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-rows md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-center">QBIT Presale</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center px-3 md:px-12 py-12 md:py-12 border-4 border-[#8E00FE] rounded-3xl relative">
              <div className="">
                <p className="text-center pb-8 font-semibold text-xl md:text-2xl">
                  Presale Live Now
                </p>
                <div className="divider">1 $QBIT = 0.11834 USDT</div>
                <div className="flex flex-col gap-4 items-center mt-8">
                  <div className="flex flex-col">
                    <div className="join">
                      <input
                        className="input input-bordered join-item w-[160px] md:w-fit"
                        placeholder="Enter Amount"
                        value={amount}
                        type="number"
                        onChange={(event) => {
                          if (event.target.value == "") {
                            setAmount("");
                          } else {
                            setAmount(event.target.value);
                          }
                        }}
                      />
                      <div className="join-item">
                        {selectedToken == 0 && (
                          <Image
                            className="input input-bordered join-item w-full py-1"
                            src={eth}
                            alt="usdt"
                          />
                        )}

                        {selectedToken == 1 && (
                          <Image
                            className="input input-bordered join-item w-full py-1"
                            src={usdt}
                            alt="usdt"
                          />
                        )}

                        {selectedToken == 2 && (
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
                          setSelectedToken(Number(event.target.value))
                        }
                      >
                        <option value={0}>ETH</option>
                        <option value={1}>USDT</option>
                        <option value={2}>USDC</option>
                      </select>
                      {/* <button className="btn join-item rounded-r-full">
                      USDT
                    </button> */}
                    </div>
                    {selectedToken == 0 && (
                      <span className="text-slate-400 text-sm ml-4 mt-2">
                        {Number(ethBalance) > 0 ? (
                          <span className="">
                            ETH Balance {Number(ethBalance).toFixed(4)}
                          </span>
                        ) : (
                          <span className="">ETH Balance 0.00</span>
                        )}
                      </span>
                    )}
                    {selectedToken == 1 && (
                      <span className="text-slate-400 text-sm ml-4 mt-2">
                        USDT Balance{" "}
                        {!isLoadingUSDTBalance
                          ? usdtBalance?.displayValue
                          : "0.00"}
                      </span>
                    )}
                    {selectedToken == 2 && (
                      <span className="text-slate-400 text-sm ml-4 mt-2">
                        USDC Balance{" "}
                        {!isLoadingUSDCBalance
                          ? usdcBalance?.displayValue
                          : "0.00"}
                      </span>
                    )}
                  </div>

                  <Image src={arrow} alt="swap" />
                  <div className="flex flex-col">
                    <div className="join">
                      <input
                        className="input input-bordered join-item w-[180px] md:w-fit"
                        value={qbitAmount}
                        readOnly
                      />
                      <div className="join-item">
                        <Image
                          className="input input-bordered join-item w-full py-1"
                          src={qbit}
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
                    <span className="text-slate-400 text-sm ml-4 mt-2">
                      Your purchased QBIT{" "}
                      {Number(qbitBoughtByUser) > 0
                        ? Number(qbitBoughtByUser).toFixed(4)
                        : "0.00"}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mt-8">
                  {selectedToken == 0 && (
                    <Web3Button
                      contractAddress={qbitAddress}
                      contractAbi={qbitABI}
                      theme="dark"
                      // Call the name of your smart contract function
                      action={(contract) =>
                        contract.call(
                          "buyQBIT",
                          [ethers.utils.parseEther(amount), selectedToken],
                          { value: ethers.utils.parseUnits(amount, 18) }
                        )
                      }
                      onSuccess={() => {
                        toast.success("Successfully bought QBIT", {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                        setBought(true);
                      }}
                      onError={(error: any) => {
                        if (
                          error.reason ==
                          "missing revert data in call exception; Transaction reverted without a reason string"
                        ) {
                          toast.error("Insufficient funds", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                        } else {
                          toast.error(error.reason, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                        }
                      }}
                    >
                      <span>BUY</span>
                    </Web3Button>
                  )}

                  {usdtApproved ? (
                    <Web3Button
                      contractAddress={qbitAddress}
                      contractAbi={qbitABI}
                      theme="dark"
                      // Call the name of your smart contract function
                      action={(contract) =>
                        contract.call("buyQBIT", [
                          ethers.utils.parseUnits(amount, 6),
                          selectedToken,
                        ])
                      }
                      onSuccess={() => {
                        toast.success("Successfully bought QBIT", {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                        isUsdtApproved(false);
                        setBought(true);
                      }}
                      onError={(error: any) =>
                        toast.error(error.reason, {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        })
                      }
                    >
                      <span>BUY</span>
                    </Web3Button>
                  ) : (
                    selectedToken == 1 && (
                      <Web3Button
                        contractAddress={usdtAddress}
                        contractAbi={usdABI}
                        theme="dark"
                        // Call the name of your smart contract function
                        action={(contract) =>
                          contract.call("approve", [
                            qbitAddress,
                            ethers.utils.parseUnits(amount, 6),
                          ])
                        }
                        onSuccess={() => {
                          toast.success("Approved USDT", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                          isUsdtApproved(true);
                        }}
                        onError={(error: any) =>
                          toast.error(error.reason, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      >
                        <span>APPROVE</span>
                      </Web3Button>
                    )
                  )}

                  {usdcApproved ? (
                    <Web3Button
                      contractAddress={qbitAddress}
                      contractAbi={qbitABI}
                      theme="dark"
                      // Call the name of your smart contract function
                      action={(contract) =>
                        contract.call("buyQBIT", [
                          ethers.utils.parseUnits(amount, 6),
                          selectedToken,
                        ])
                      }
                      onSuccess={() => {
                        toast.success("Successfully bought QBIT", {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        });
                        isUsdcApproved(false);
                        setBought(true);
                      }}
                      onError={(error: any) =>
                        toast.error(error.reason, {
                          position: "top-center",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                        })
                      }
                    >
                      <span>BUY</span>
                    </Web3Button>
                  ) : (
                    selectedToken == 2 && (
                      <Web3Button
                        contractAddress={usdcAddress}
                        contractAbi={usdABI}
                        theme="dark"
                        // Call the name of your smart contract function
                        action={(contract) =>
                          contract.call("approve", [
                            qbitAddress,
                            ethers.utils.parseUnits(amount, 6),
                          ])
                        }
                        onSuccess={() => {
                          toast.success("Approved USDC", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                          isUsdcApproved(true);
                        }}
                        onError={(error: any) =>
                          toast.error(error.reason, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          })
                        }
                      >
                        <span>APPROVE</span>
                      </Web3Button>
                    )
                  )}
                </div>
                {/* <p className="absolute bottom-2 text-sm text-slate-500 left-[50%] translate-x-[-50%]">
                  Import QBIT token to your wallet
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
