"use client";
import React from "react";
import { Chart } from "react-google-charts";

export default function Distribution() {
  const teamData = [
    ["Task", "Hours per Day"],
    ["Team", 20],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const fundsData = [
    ["Percentage", "Tokens"],
    ["Team", 20],
    ["Airdrops", 10],
    ["Presale", 40],
    ["Rewards", 10],
    ["Liquidity", 20],
  ];

  const options1 = {
    is3D: true,
    backgroundColor: "#1a103c",
    colors: ["#FF852E", "#FF00FF", "#2E8FFF", "#C680FF", "#4EFACA"],
  };

  const options2 = {
    is3D: true,
    backgroundColor: "transparent",
    colors: ["#2EFFC7", "#FFE56A", "#FF852E", "#FF5FAE", "#772EFF"],
  };
  return (
    <div className="min-h-screen bgDistribution text-white flex justify-center items-center">
      <div>
        <h1 className="text-2xl md:text-4xl text-center mb-6 md:mb-12 divider ">
          Token Distribution
        </h1>

        <div className="flex justify-center items-center">
          <div className="w-full md:w-[90vw]">
            <p className="px-5 text-justify my-14 md:my-28 text-base md:text-2xl ">
              Qbit serves as the quantum cornerstone, seamlessly interwoven
              within the intricate matrix of the hyper-realm metaverse, powering
              the very fabric of its digital tapestry.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* <div>
            <h1 className="text-center text-lg md:text-xl">Team Allocation</h1>
            <Chart
              legendToggle
              className="w-full h-full md:w-[49vw] md:h-[50vh]"
              chartType="PieChart"
              data={teamData}
              options={options1}
              // width={"49vw"}
              // height={"50vh"}
            />
          </div> */}
          <div>
            <h1 className="text-center text-lg md:text-xl ">
              Allocation of funds
            </h1>
            <Chart
              className="w-full h-full md:w-[98vw] md:h-[50vh]"
              chartType="PieChart"
              data={fundsData}
              options={options2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
