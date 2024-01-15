import React from "react";
import Image from "next/image";
const Introduction = () => {
  return (
    <section className=" flex flex-row items-center gap-36 mt-14 mb-20 pl-[8rem] pr-[4rem]">
      <Image
        src="/intro.png"
        alt="intro"
        width={490}
        height={477}
        className="flex-1 object-cover bg-no-repeat"
      />
      <article className="flex flex-col flex-1 gap-4 items-center justify-center">
        <h2 className="font-bold text-[32px]">
          Introduction to getlinked{" "}
          <span className="text-[#D434FE] ">tech Hackathon 1.0</span>
        </h2>
        <p className="font-Montserrat leading-[1.171875rem] font-normal" >
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you are a coding genius,
          a design maverick, or a concept wizard, you willll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that is what were all about!
        </p>
      </article>
    </section>
  );
};

export default Introduction;
