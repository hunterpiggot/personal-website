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
    <div className="h-full flex flex-col">
      <div className="bg-custom-black min-w-[200px] sm:min-w-[356px] rounded-2xl overflow-hidden grow flex flex-col">
        <div className="flip-card w-full h-full">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src="/assets/fake-react-code.jpg"
                alt="Avatar"
                className="w-full h-full"
              />
            </div>
            <div className="flip-card-back text-custom-white p-2 sm:p-5 text-c-md overflow-auto">
              {description}
            </div>
          </div>
        </div>
        <div className="w-full py-4 px-10 text-c-md text-center text-custom-white font-medium cursor-pointer">
          <div onClick={handleLinkClick} className="w-full">
            <a
              className=""
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
            >
              LINK
            </a>
          </div>
        </div>
      </div>
      <div className="text-c-lg text-center p-4">{name}</div>
    </div>
  );
};
