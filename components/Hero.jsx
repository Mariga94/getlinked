import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="flex w-full flex-col ">
      <div className="flex flex-col my-8 mr-14 items-end justify-end">
        <h2 className="font-Montserrat text-4xl font-bold italic ">
          Igniting a Revolution in HR Innovation
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="255"
          height="17"
          viewBox="0 0 255 17"
          fill="none"
        >
          <path
            d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
            stroke="#FF26B9"
            stroke-width="5"
          />
        </svg>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col flex-1 w-full pl-26" >
          <Image src="/star.png" alt="star" width={26} height={32} />
          <Image
            src="/creative-1.png"
            alt="creative"
            width={53}
            height={73}
            className="creative absolute"
          />
          <div className="">
            <h1 className="text-[5rem] font-bold inline relative ">
              getlinked Tech Hackathon 
               <span className="text-[#D434FE]">1.0</span>
            </h1>
            <Image
              src="/chain-1.png"
              alt="chain"
              width={86}
              height={86}
              className="absolute chain"
            />
          </div>
          <p className="mt-2 w-[32rem]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big price
          </p>
          <button className="mt-10">Register</button>
          <div className="mt-5 flex items-center">
            <span className="font-normal leading-[85px] text-6xl">00   00   00</span>
          </div>
        </div>
        <div className="flex-col flex-1  w-full">
          <div>
            {/* <Image
              src="/purple-lens.png"
              alt="blur"
              width={951}
              height={994}
              className="purple-lens_hero absolute bg-slate-300"
            /> */}
            <Image
              src="/man-wearing-sun-glasses.png"
              alt="man wearing glasses"
              width={928}
              height={915}
              className="relative custom-background-blend-luminosity object-contain"
            />
            <Image
              src="/image-1.png"
              alt="globe"
              width={560}
              height={560}
              className="absolute globe object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
