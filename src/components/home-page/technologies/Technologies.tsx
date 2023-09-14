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

  // const frontendLogos =
  console.log(
    "🚀 ~ file: Technologies.tsx:68 ~ Technologies ~ frontendLogos:",
    getIconSize(350)
  );
  return (
    <div className="min-h-screen bg-custom-black px-[50px] text-custom-white py-8 flex flex-col">
      <div>
        <PageTitle title="Technologies" color="white" />
      </div>
      <div className="grid lg:grid-cols-3 justify-items-stretch w-full flex-grow gap-x-12 pb-8 pt-4">
        <TechnologiesContainer logos={frontendSvgs} title="Frontend" />
        <TechnologiesContainer logos={toolsSvgs} title="Tools" />
        <TechnologiesContainer logos={backendSvgs} title="Backend" />
      </div>
    </div>
  );
};
