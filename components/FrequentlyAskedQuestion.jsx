import React from "react";
import Image from "next/image";
const FrequentlyAskedQuestion = () => {
  return (
    <section className="flex flex-row ml-[6rem] mr-[6rem] my-[3.94rem] border-b-[1px] border-[rgba(255, 255, 255, 0.18)]">
      <div>
        <h2 className="font-bold text-[2rem]">
          Frequently Ask <br />
          <span className="text-[#D434FE]">Question</span>
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.171875rem] font-Montserrat mt-[1rem]">
          We got answers to the questions that you might want to ask about 
          <span className="font-Montserrat font-bold">
            getlinked Hackathon 1.0
          </span>
        </p>
        <ul className="flex flex-col font-Montserrat text-[0.875rem] mt-[4.25rem]">
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem]">
            <p>Can I work on a project I started before the hackathon?</p>
            <span className="text-[#D434FE]">+</span>
          </li>
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem] pt-[2.38rem]">
            <p>What happens if I need help during the hackathon?</p>
            <span className="text-[#D434FE]">+</span>
          </li>
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem] pt-[2.38rem]">
            <p>What happens if I dont have an idea for a project?</p>
            <span className="text-[#D434FE]">+</span>
          </li>
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem] pt-[2.38rem]">
            <p>Can I join a team or do I have to come with one?</p>
            <span className="text-[#D434FE]">+</span>
          </li>
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem] pt-[2.38rem]">
            <p>What happens after the hackathon ends</p>
            <span className="text-[#D434FE]">+</span>
          </li>
          <li className="flex flex-row items-center justify-between border-b-2 border-[#D434FE] pb-[0.81rem] pt-[2.38rem]">
            <p>Can I work on a project I started before the hackathon?</p>
            <span className="text-[#D434FE]">+</span>
          </li>
        </ul>
      </div>
      <Image src="/faq.png" width={741} height={741} alt="faq" />
    </section>
  );
};

export default FrequentlyAskedQuestion;
