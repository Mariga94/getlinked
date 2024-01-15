import React from "react";
import Image from "next/image";
const Rules = () => {
  return (
    <section className="flex flex-row items-center gap-12 mt-14 mb-20 pl-[10rem] pr-[5rem]">
      <article className="flex flex-col flex-1">
        <h2 className="font-bold text-[32px]">
          Rules and <span className="text-[#D434FE]">Guidelines</span>
        </h2>
        <p className="font-Montserrat font-normal leading-[1.7rem]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you are a coding genius,
          a design maverick, or a concept wizard, you will have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that is what we are all about!
        </p>
      </article>
      <Image
        src="/person-1.png"
        height={664}
        width={664}
        alt="person"
        className="flex-1"
      />
    </section>
  );
};

export default Rules;
