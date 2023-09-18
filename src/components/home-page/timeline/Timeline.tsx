import { PageTitle } from "@/primitives";
import { TimelineBars } from "./TimelineBars";

export const Timeline = () => {
  return (
    <div className="min-h-screen bg-custom-black py-8 px-4 md:px-[50px]">
      <div className="flex flex-col h-full">
        <div>
          <PageTitle title="Timeline" color="white" />
        </div>
        <div className="flex flex-row justify-center space-y-8 md:flex-col md:space-y-0 gap-x-2 md:gap-x-0">
          <div className="flex flex-col md:flex-row justify-between text-center gap-x-4 md:gap-x-20 gap-y-20 py-[50px] md:py-8 text-c-md">
            <div className="text-timeline-green">
              Transitioned from college to Springboard's Software Engineering
              Bootcamp. Acquired foundational skills in JavaScript, Python,
              React, Redux, Express, and Flask, setting the stage for a career
              in full-stack development.
            </div>
            <div className="text-timeline-red">
              Started at Cazton working on a healthcare web portal focused on
              diabetes management. Utilized React, TypeScript, and Redux to
              create a secure and user-friendly interface. Implemented best
              practices for handling sensitive medical data across over 30
              different countries.
            </div>
            <div className="text-timeline-salmon">
              Currently leading a front-end development project, focusing on
              creating an intuitive and user-friendly interface for home
              renovation solutions.
            </div>
          </div>
          <div className="w-full py-10">
            <TimelineBars />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-x-4 md:gap-x-20 gap-y-40 py-[50px] md:py-8 text-center text-c-md">
            <div className="flex flex-col items-center justify-center text-timeline-yellow">
              Spearheaded the development of a React-based front-end application
              at JKP Group for mortgage analytics and property value assessment.
              Also engineered a Python and Flask back-end system, tailored to
              client needs for enhanced data-driven decision-making.
            </div>
            <div className="flex flex-col items-center justify-center text-timeline-blue">
              Developed another healthcare portal for brightinsight, this time
              focusing on vision care. Orchestrated a back-end architectural
              redesign that led to a 300% increase in application performance.
              Collaborated with a cross-functional team to achieve this
              significant improvement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
