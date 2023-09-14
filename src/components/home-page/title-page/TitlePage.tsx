import { NavBarView } from "../../../views";
import { BaseButton } from "../../../primitives";
import { LinkGitHubSvg, LinkedInSvg } from "../../../assets";

export const TitlePage = () => {
  const handleContactMeClick = () => {
    console.log("HANDLE CONTACT ME CLICKED");
  };

  const handleResumeClick = () => {
    console.log("HANDLE RESUME CLICKED");
  };
  return (
    <div className="min-h-screen bg-custom-black flex flex-col">
      <NavBarView />
      <div className="px-6 sm:px-12 md:px-[86px] pb-[86px] pt-10 flex flex-row flex-grow h-full content-center">
        <div className="self-center flex flex-col content-center md:justify-start text-white flex-grow w-2/3 md:w-2/3 font-base h-full">
          <div className="text-c-xl text-center md:text-start">
            Hello, I'm Hunter Piggot
          </div>
          <div className="flex">
            <div className="grow h-1 bg-custom-teal overflow-hidden"></div>
            <div className="w-32 hidden md:inline-block"></div>
          </div>
          <div className="flex gap-x-16 my-8 justify-center md:justify-start">
            <BaseButton
              label="Contact me"
              onClick={handleContactMeClick}
              color="white"
            />
            <BaseButton
              label="Resume"
              onClick={handleResumeClick}
              color="white"
            />
          </div>
          <div className="flex gap-x-11 justify-center md:justify-start">
            <div>{LinkedInSvg}</div>
            <div>{LinkGitHubSvg}</div>
          </div>
        </div>
        <div className="flex-grow flex-shrink w-full md:w-1/3 min-w-0 h-[80vh] hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="/assets/fake-profile-pic.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
