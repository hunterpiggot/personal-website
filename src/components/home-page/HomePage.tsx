import { AboutMe } from "./about-me";
import { ContactMe } from "./contact-me";
import { Projects } from "./projects";
import { Technologies } from "./technologies";
import { Timeline } from "./timeline";
import { TitlePage } from "./title-page";

export const HomePage = () => {
  return (
    <div>
      <TitlePage />
      <AboutMe />
      <Technologies />
      <Projects />
      <Timeline />
      <ContactMe />
    </div>
  );
};
