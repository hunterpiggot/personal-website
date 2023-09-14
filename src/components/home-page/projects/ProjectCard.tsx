import { IProject } from "./Projects";

interface Props {
  project: IProject;
}
export const ProjectCard = ({ project }: Props) => {
  const { name, description, imageUrl, externalLink } = project;

  const handleLinkClick = () => {
    console.log("HANDLE LINK CLICK");
  };

  return (
    <div className="flex flex-col justify-center h-full">
      <div className="bg-custom-black min-w-[200px] sm:min-w-[356px] max-h-[66%] rounded-2xl overflow-hidden grow flex flex-col">
        <div className="w-full h-full flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/assets/fake-react-code.jpg"
                alt="Avatar"
                className="w-full h-full"
              />
            </div>
            <div className="p-2 overflow-auto flip-card-back text-custom-white sm:p-5 text-c-md">
              {description}
            </div>
          </div>
        </div>
        <div className="w-full px-10 py-4 font-medium text-center cursor-pointer text-c-md text-custom-white">
          <div onClick={handleLinkClick} className="w-full">
            <a
              className="uppsercase"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              LINK
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 text-center text-c-lg whitespace-nowrap">{name}</div>
    </div>
  );
};
