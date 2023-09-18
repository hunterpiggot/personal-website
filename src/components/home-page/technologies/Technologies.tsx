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
} from "@/assets";
import { GitSvg } from "@/assets/logos/ToolsTech.svg";
import { PageTitle } from "@/primitives";
import { TechnologiesContainer } from "./TechnologiesContainer";

export interface ITechnologyLogo {
  logo: JSX.Element;
  title: string;
  link: string;
}
export const Technologies = () => {
  const frontendSvgs: ITechnologyLogo[] = [
    {
      logo: JavaScriptSvg,
      title: "JavaScript",
      link: "https://www.javascript.com/",
    },
    {
      logo: TypeScriptSvg,
      title: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    { logo: ReactSvg, title: "React", link: "https://react.dev/" },
    { logo: ReduxSvg, title: "Redux", link: "https://redux.js.org/" },
    { logo: ViteSvg, title: "Vite", link: "https://vitejs.dev/" },
    { logo: NextJsSvg, title: "Next.js", link: "https://nextjs.org/" },
    {
      logo: TailwindCssSvg,
      title: "Tailwind Css",
      link: "https://tailwindcss.com/",
    },
  ];
  const toolsSvgs: ITechnologyLogo[] = [
    { logo: GitSvg, title: "Git", link: "https://git-scm.com/" },
    { logo: GitHubSvg, title: "GitHub", link: "https://github.com/" },
    { logo: BitbucketSvg, title: "Bitbucket", link: "https://bitbucket.org/" },
    { logo: DockerSvg, title: "Docker", link: "https://www.docker.com/" },
    { logo: JenkinsSvg, title: "Jenkins", link: "https://www.jenkins.io/" },
    { logo: JestSvg, title: "Jest", link: "https://jestjs.io/" },
  ];
  const backendSvgs: ITechnologyLogo[] = [
    { logo: PythonSvg, title: "Python", link: "https://www.python.org/" },
    {
      logo: CSharpSvg,
      title: "C#",
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      logo: PostgreSqlSvg,
      title: "PostgreSQL",
      link: "https://www.postgresql.org/",
    },
    { logo: GraphQlSvg, title: "GraphQL", link: "https://graphql.org/" },
    { logo: NodeJsSvg, title: "Node.js", link: "https://nodejs.org/" },
    {
      logo: DotNetCoreSvg,
      title: ".NET Core",
      link: "https://dotnet.microsoft.com/en-us/",
    },
    {
      logo: FlaskSvg,
      title: "Flask",
      link: "https://flask.palletsprojects.com/en/2.3.x/",
    },
  ];

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
