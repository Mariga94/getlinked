import React from "react";
import Image from "next/image";
const JudgingCriteria = () => {
  return (
    <section className="flex flex-row mt-14 mb-20 pl-[2rem] pr-[3rem]">
      <Image src="/judging.png" width={710} height={587} alt="judging" />
      <div className="flex flex-col gap-[1.3rem]">
        <h2 className="font-bold text-[2rem]">
          Judging Criteria <br/><span className="text-[#D434FE]">Key attribute</span>
        </h2>
        <ul className="flex flex-col gap-[1.3rem]">
          <li>
            <p className="text-[1rem]">
              <span className="text-[#D434FE]">Innovation and Creativity</span> Evaluate the uniqueness and
              creativity of the solution. Consider whether it addresses a
              real-world problem in a novel way or introduces innovative
              features.
            </p>
          </li>
          <li>
            <p className="text-[1rem]">
              <span className="text-[#D434FE]">Functionality:</span>
              Assess how well the solution works. Does it perform its intended
              functions effectively and without major issues? Judges would
              consider the completeness and robustness of the solution.
            </p>
          </li>
          <li>
            <p className="text-[1rem]">
              <span className="text-[#D434FE]">Impact and Relevance:</span>
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
          </li>
          <li>
            <p className="text-[1rem]">
              <span className="text-[#D434FE]">Technical Complexity:</span>
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
          </li>
          <li>
            <p className="text-[1rem]">
              <span className="text-[#D434FE]">Adherence to Hackathon Rules:</span>
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>
          </li>
        </ul>

        <button className="">Read More</button>
      </div>
    </section>
  );
};

export default JudgingCriteria;
