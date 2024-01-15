import React from "react";
import Image from "next/image";
const Rewards = () => {
  return (
    <section className="flex flex-row gap-[2rem]">
      <Image src="/target.png" width={548} height={482} alt="target" />
      <div>
        <div>
          <h2>
            Prizes and <br/> <span className="text-[#D434FE] text-[2rem] font-bold">Rewards</span>
          </h2>
          <p className="font-Montserrat">
            Highligt of the prizes or rewards for winners and for participants
          </p>
        </div>
        <div className="flex flex-row">
          <div>
            <Image src="/silver.png" width={179} height={180} alt="position" />
            <div>
              <p>2nd Runner</p>
              <h3>N300,000</h3>
            </div>
          </div>
          <div>
            <Image src="/gold.png" width={296} height={296} alt="gold" />
            <div>
              <p>1st Runner</p>
              <h3>N400,000</h3>
            </div>
          </div>
          <div>
            <Image src="/bronze.png" width={179} height={180} alt="bronze" />
            <div className="bg-[rgba(212, 52, 254, 0.12)]">
              <p>3rd Runner</p>
              <h3>N150,000</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
