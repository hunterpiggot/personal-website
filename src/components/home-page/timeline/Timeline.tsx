import { PageTitle } from "../../../primitives";
import { TimelineBars } from "./TimelineBars";

export const Timeline = () => {
  return (
    <div className="min-h-screen bg-custom-black py-8 px-4 md:px-[50px]">
      <div className="flex flex-col h-full">
        <div>
          <PageTitle title="Timeline" color="white" />
        </div>
        <div className="flex flex-row md:flex-col space-y-8 md:space-y-0 justify-center gap-x-2 md:gap-x-0">
          <div className="flex flex-col md:flex-row justify-between text-center gap-x-4 md:gap-x-20 gap-y-20 py-[50px] md:py-8 text-c-md">
            <div className="text-timeline-green">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, amet eligendi omnis corporis voluptate doloribus
              ratione maxime obcaecati magni dolorum. Molestias voluptates,
              distinctio accusamus laudantium consequatur dolorem nostrum quos
              nihil.
            </div>
            <div className="text-timeline-red">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium saepe excepturi nihil, ipsam, soluta beatae magnam
              ullam minima explicabo obcaecati eligendi neque commodi ipsa error
              ratione fugit possimus harum! Nesciunt?
            </div>
            <div className="text-timeline-salmon">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium nostrum recusandae sequi. Magnam in totam saepe
              provident, neque obcaecati eum unde, voluptatibus quasi rem
              eveniet perferendis. Temporibus hic minima ad.
            </div>
          </div>
          <div className="w-full py-10">
            <TimelineBars />
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-x-4 md:gap-x-20 gap-y-40 py-[50px] md:py-8 text-center text-c-md">
            <div className="flex flex-col items-center justify-center text-timeline-yellow">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              eligendi reiciendis dolorum praesentium omnis voluptas assumenda
              autem pariatur inventore! Quasi porro in quas sunt ipsam nostrum
              nobis modi dicta mollitia?
            </div>
            <div className="flex flex-col items-center justify-center text-timeline-blue">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              explicabo officia ut? Asperiores, voluptatibus. Quas debitis
              voluptas nam nisi quisquam quasi aliquam temporibus amet quis
              nihil ratione ab, libero placeat!
            </div>
          </div>
        </div>
      </div>
      {/* <div>2019 - Started learning python</div>
      <div>2020 - started boot camp and working as a website coordinator</div>
      <div>
        2021 - finished bootcamp and started working as full stack developer
      </div>
      <div>
        2022 - started working at cazton and was contracted out to bright
        insight. Worked on Diabetes portal
      </div>
      <div>
        2023 - Finished Diabetes project and sarted working on Vision project.
        Started working for goodhomes renovations
      </div> */}
    </div>
  );
};
