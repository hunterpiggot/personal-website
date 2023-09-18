import { useEffect, useRef, useState } from "react";
import { ScrollArrowLeftSvg, ScrollArrowRightSvg } from "@/assets";
import { PageTitle } from "@/primitives";
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
      imageUrl: "/assets/fake-react-code.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut, atmodi, velit voluptatem fugit adipisci ullam qui omnis necessitatibus eligendi et dolor a voluptatum atque distinctio perspiciatis consectetur delectus.",
      externalLink: "www.google.com",
    },
    {
      name: "Brightinsight - Vision",
      imageUrl: "/assets/fake-react-code.jpg",
      description: "This is the project",
      externalLink: "www.google.com",
    },
    {
      name: "Automatic Bartender",
      imageUrl: "/assets/fake-react-code.jpg",
      description: "This is the project",
      externalLink: "www.google.com",
    },
  ];

  const [isScrollable, setIsScrollable] = useState<Boolean>(false);

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
        <div className="flex pt-8 grow no-scrollbar">
          {isScrollable && (
            <div
              className="self-center hidden pr-10 cursor-pointer sm:block"
              onClick={scrollLeft}
            >
              {ScrollArrowLeftSvg}
            </div>
          )}
          <div
            className="self-center h-full px-10 overflow-auto grow no-scrollbar"
            ref={scrollRef}
          >
            <div className="flex items-center h-full gap-x-4 sm:gap-x-10 no-scrollbar">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
          {isScrollable && (
            <div
              className="self-center hidden pl-10 cursor-pointer sm:block"
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
