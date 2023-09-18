import { RefObject, useRef, useState } from "react";
import { AboutMe } from "./about-me";
import { ContactMe } from "./contact-me";
import { Projects } from "./projects";
import { Technologies } from "./technologies";
import { Timeline } from "./timeline";
import { TitlePage } from "./title-page";

export interface IRefLookup {
  about: RefObject<HTMLDivElement>;
  technologies: RefObject<HTMLDivElement>;
  projects: RefObject<HTMLDivElement>;
  timeline: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
  blog: RefObject<HTMLDivElement>;
}

export const HomePage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const refLookup: IRefLookup = {
    about: aboutRef,
    technologies: technologiesRef,
    projects: projectsRef,
    timeline: timelineRef,
    contact: contactRef,
    blog: blogRef,
  };

  const scrollToRef = (refLookupStr: keyof IRefLookup) => {
    const ref = refLookup[refLookupStr];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  return (
    <div>
      <TitlePage
        scrollToRef={scrollToRef}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={technologiesRef}>
        <Technologies />
      </div>
      {/* <div ref={projectsRef}>
        <Projects />
      </div> */}
      <div ref={timelineRef}>
        <Timeline />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
    </div>
  );
};
