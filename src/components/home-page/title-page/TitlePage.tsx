import { NavBarView } from "../../../views";
import { BaseButton } from "../../../primitives";
import { LinkGitHubSvg, LinkedInSvg } from "../../../assets";
import { IRefLookup } from "../HomePage";
import fakeProfilePic from "../../../../public/assets/fake-profile-pic.jpg";
import Pdf from "../../../../public/assets/Resume-Software_Engineer-Hunter_Piggot.pdf";

interface Props {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToRef: (refLookup: keyof IRefLookup) => void;
}

export const TitlePage = ({ isNavOpen, setIsNavOpen, scrollToRef }: Props) => {
  const handleContactMeClick = () => {
    scrollToRef("contact");
  };

  const handleResumeClick = () => {
    const link = document.createElement("a") as any;
    link.href = Pdf;
    link.download = "Resume-Software_Engineer-Hunter_Piggot.pdf"; // Optional; sets the download name
    link.click();
  };

  return (
    <div>
      <div
        data-testid="app.title-page"
        className="flex flex-col min-h-screen bg-custom-black"
      >
        <NavBarView
          setIsNavOpen={setIsNavOpen}
          isNavOpen={isNavOpen}
          scrollToRef={scrollToRef}
        />
        <div className="px-6 sm:px-12 md:px-[86px] pb-[86px] pt-10 flex flex-row flex-grow h-full content-center">
          <div className="flex flex-col content-center self-center flex-grow w-2/3 h-full text-white md:justify-start md:w-2/3 font-base">
            <div className="text-center text-c-xl md:text-start">
              Hello, I'm Hunter Piggot
            </div>
            <div className="flex">
              <div className="h-1 overflow-hidden grow bg-custom-teal"></div>
              <div className="hidden w-32 md:inline-block"></div>
            </div>
            <div className="flex justify-center my-8 gap-x-16 md:justify-start">
              <BaseButton
                testid="app.title-page.contact"
                label="Contact me"
                onClick={handleContactMeClick}
                color="white"
              />
              <BaseButton
                testid="app.title-page.resume"
                label="Resume"
                onClick={handleResumeClick}
                color="white"
              />
            </div>
            <div className="flex justify-center gap-x-11 md:justify-start">
              <div>{LinkedInSvg}</div>
              <div>{LinkGitHubSvg}</div>
            </div>
          </div>
          <div className="flex-grow flex-shrink w-full md:w-1/3 min-w-0 h-[80vh] hidden sm:block">
            <img
              className="object-cover w-full h-full"
              src={fakeProfilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
