import { useEffect, useRef, useState } from "react";
import { ScrollArrowLeftSvg, ScrollArrowRightSvg } from "../../../assets";
import { PageTitle } from "../../../primitives";
import { ProjectCard } from "./ProjectCard";

export interface IProject {
  name: string;
  imageUrl: string;
  description: string;
  externalLink: string;
}
export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects: IProject[] = [
    {
      name: "Brightinsight - Diabetes",
      imageUrl: "/",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut, atmodi, velit voluptatem fugit adipisci ullam qui omnis necessitatibus eligendi et dolor a voluptatum atque distinctio perspiciatis consectetur delectus.",
      externalLink: "www.google.com",
    },
    {
      name: "Brightinsight - Vision",
      imageUrl: "/",
      description: "This is the project",
      externalLink: "www.google.com",
    },
    {
      name: "Automatic Bartender",
      imageUrl: "/",
      description: "This is the project",
      externalLink: "www.google.com",
    },
  ];

  const [isScrollable, setIsScrollable] = useState<Boolean>(false);
  console.log(
    "🚀 ~ file: Projects.tsx:37 ~ Projects ~ isScrollable:",
    isScrollable
  );

  useEffect(() => {
    const checkScrollability = () => {
      if (scrollRef.current) {
        setIsScrollable(
          scrollRef.current.scrollWidth > scrollRef.current.clientWidth
        );
      }
    };

    checkScrollability();
    // you may also want to re-check whenever the window resizes
    window.addEventListener("resize", checkScrollability);

    // Cleanup
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen min-h-screen bg-custom-white py-8 px-8 md:px-[50px] overflow-hidden">
      <div className="flex flex-col h-full">
        <PageTitle title="Projects" color="black" />
        <div className="flex grow no-scrollbar pt-8">
          {isScrollable && (
            <div
              className="hidden sm:block pr-10 cursor-pointer self-center"
              onClick={scrollLeft}
            >
              {ScrollArrowLeftSvg}
            </div>
          )}
          <div
            className="grow px-10 overflow-auto no-scrollbar h-full"
            ref={scrollRef}
          >
            <div className="flex gap-x-4 sm:gap-x-10 h-full no-scrollbar">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
          {isScrollable && (
            <div
              className="hidden sm:block pl-10 cursor-pointer self-center"
              onClick={scrollRight}
            >
              {ScrollArrowRightSvg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
