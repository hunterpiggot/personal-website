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
            <div className="flex flex-col items-center justify-center text-timeline-yellow">
              Spearheaded the development of a React-based front-end application
              at JKP Group for mortgage analytics and property value assessment.
              Also engineered a Python and Flask back-end system, tailored to
              client needs for enhanced data-driven decision-making.
            </div>
            <div className="text-timeline-blue">
              Started at Cazton working on a healthcare web portal focused on
              diabetes management. Utilized React, TypeScript, and Redux to
              create a secure and user-friendly interface. Implemented best
              practices for handling sensitive medical data across over 30
              different countries.
            </div>
            <div className="text-timeline-purple">
              Lled the development of a property investment app with integrated
              financial tools, reducing project overruns by 10%. Using React,
              Vite, TypeScript, and .NET 7.0, I built a responsive interface and
              optimized cloud performance by 20% through Azure hosting and SQL
              Server management.
            </div>
          </div>
          <div className="w-full py-10">
            <TimelineBars />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-x-4 md:gap-x-20 gap-y-40 py-[50px] md:py-8 text-center text-c-md">
            <div className="flex flex-col items-center justify-center text-timeline-salmon">
              Developed another healthcare portal for brightinsight, this time
              focusing on vision care. Orchestrated a back-end architectural
              redesign that led to a 300% increase in application performance.
              Collaborated with a cross-functional team to achieve this
              significant improvement.
            </div>
            <div className="flex flex-col items-center justify-center text-timeline-pink">
              Led a team of five frontend developers in building a SaaS platform
              that streamlines data collection and management for
              archaeologists, with a focus on geospatial features for managing
              thousands of locations. By introducing best practices and
              modernizing the development stack, I increased productivity by 38%
              and reduced build times by 25%, enabling faster deployments and
              more efficient project workflows.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
