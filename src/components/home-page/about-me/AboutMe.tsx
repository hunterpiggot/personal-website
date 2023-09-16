import fakeReactCode from "../../../../public/assets/fake-react-code.jpg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse min-h-screen px-12 py-24 bg-custom-white xl:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      <div className="flex-grow order-2 w-full text-center xl:order-2">
        <div className="text-c-xl">About me</div>
        <div className="w-full h-1 bg-custom-teal"></div>
        <div className="flex-grow pt-4 text-sm sm:text-md md:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl">
          <div className="flex flex-col gap-y-4">
            <div>
              As a Full Stack Software Engineer with over 2 years of
              professional experience, I've been a key player in the
              development, deployment, and maintenance of multiple web
              applications across diverse sectors, including healthcare and real
              estate. My technical proficiency spans a wide array of
              technologies such as React, JavaScript, TypeScript, Python, CSS,
              and HTML, making me a versatile asset in both front-end and
              back-end development.
            </div>
            <div>
              During my tenure at JKP Group, I pioneered a React-based
              application that streamlined mortgage analytics and property value
              assessments, while also crafting a robust back-end system using
              Python and Flask. This dual expertise has enabled me to deliver
              comprehensive software solutions tailored to specific client
              needs.
            </div>
            <div>
              At Cazton, I was an instrumental contributor to two healthcare web
              portals for BrightInsight. I developed the front ends from scratch
              using React, TypeScript, Google Cloud Platform, and Python, and
              led many parts of the application in data management for a range
              of medical professionals. I implemented best practices for
              managing sensitive medical data and ensured compliance across over
              30 different countries. Working in an Agile environment, I
              collaborated with a diverse team of 25 developers and completed
              twice the assigned workload. Additionally, I initiated a back-end
              architectural redesign that resulted in a 300% increase in
              application performance and higher user satisfaction.
            </div>
            <div>
              I pride myself on a near 100% on-time project completion rate and
              have contributed to significant performance improvements in
              existing applications. My commitment to continuous learning is
              evidenced by my current participation in the Caltech Artificial
              Intelligence and Machine Learning Bootcamp that started in 2023,
              where I'm gaining deeper insights into AI and ML technologies.
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-grow flex-shrink order-1 hidden w-full min-w-0 h-1/2 xl:h-full sm:block xl:w-1/3 xl:order-1">
          <img
            className="object-cover w-full h-full"
            src={fakeReactCode}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
