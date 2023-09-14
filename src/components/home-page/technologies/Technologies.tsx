import {
  CSharpSvg,
  DotNetCoreSvg,
  FlaskSvg,
  GraphQlSvg,
  JavaScriptSvg,
  NextJsSvg,
  NodeJsSvg,
  PostgreSqlSvg,
  PythonSvg,
  ReactSvg,
  ReduxSvg,
  TailwindCssSvg,
  TypeScriptSvg,
  ViteSvg,
  BitbucketSvg,
  DockerSvg,
  GitHubSvg,
  JenkinsSvg,
  JestSvg,
} from "../../../assets";
import { GitSvg } from "../../../assets/logos/ToolsTech.svg";
import { PageTitle } from "../../../primitives";
import { TechnologiesContainer } from "./TechnologiesContainer";

export const Technologies = () => {
  const frontendSvgs = [
    { logo: JavaScriptSvg, title: "JavaScript" },
    { logo: TypeScriptSvg, title: "TypeScript" },
    { logo: ReactSvg, title: "React" },
    { logo: ReduxSvg, title: "Redux" },
    { logo: ViteSvg, title: "Vite" },
    { logo: NextJsSvg, title: "Next.js" },
    { logo: TailwindCssSvg, title: "Tailwind Css" },
  ];
  const toolsSvgs = [
    { logo: GitSvg, title: "Git" },
    { logo: GitHubSvg, title: "GitHub" },
    { logo: BitbucketSvg, title: "Bitbucket" },
    { logo: DockerSvg, title: "Docker" },
    { logo: JenkinsSvg, title: "Jenkins" },
    { logo: JestSvg, title: "Jest" },
  ];
  const backendSvgs = [
    { logo: PythonSvg, title: "Python" },
    { logo: CSharpSvg, title: "C#" },
    { logo: PostgreSqlSvg, title: "PostgreSQL" },
    { logo: GraphQlSvg, title: "GraphQL" },
    { logo: NodeJsSvg, title: "Node.js" },
    { logo: DotNetCoreSvg, title: ".NET Core" },
    { logo: FlaskSvg, title: "Flask" },
  ];

  const getIconSize = (containerSize: number) => {
    if (containerSize >= 553) {
      return 136;
    } else if (containerSize <= 280) {
      return 32;
    } else {
      const adjustedSize = containerSize * 0.38095238095238093 - 74.67;
      return adjustedSize;
    }
  };

  return (
    <div className="min-h-screen bg-custom-black px-6  md:px-8 lg:px-[50px] text-custom-white py-8 flex flex-col">
      <div>
        <PageTitle title="Technologies" color="white" />
      </div>
      <div className="grid flex-grow w-full pt-4 pb-8 lg:grid-cols-3 gap-y-6 justify-items-stretch gap-x-4 md:gap-x-8 lg:gap-x-6 xl:gap-x-8 2xl:gap-x-10">
        <TechnologiesContainer logos={frontendSvgs} title="Frontend" />
        <TechnologiesContainer logos={toolsSvgs} title="Tools" />
        <TechnologiesContainer logos={backendSvgs} title="Backend" />
      </div>
    </div>
  );
};
