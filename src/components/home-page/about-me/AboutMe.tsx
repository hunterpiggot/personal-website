export const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse min-h-screen px-12 py-24 bg-custom-white xl:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      <div className="flex-grow order-2 w-full text-center xl:order-2">
        <div className="text-c-xl">About me</div>
        <div className="w-full h-1 bg-custom-teal"></div>
        <div className="flex-grow pt-4 text-sm sm:text-md md:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl">
          <div className="flex flex-col gap-y-4">
            <div>
              Full Stack Software Engineer with over 4 years of experience in
              developing and maintaining web applications, specializing in
              React, JavaScript, TypeScript, Python, CSS, and HTML. Based in
              Colorado Springs, I focus on delivering high-quality software
              solutions and creating productive team environments.
            </div>
            <div>
              In my recent role, I led a team of 5 frontend developers,
              enhancing productivity by 38% and modernizing our tech stack with
              tools like Vite and Tailwind CSS. By prioritizing scalable
              solutions and establishing coding standards, I improved team
              efficiency and application performance. My experience includes
              developing robust features and maintaining project timelines, even
              during periods of restructuring.
            </div>
            <div>
              I have worked on creating advanced applications for property
              investment and healthcare sectors, streamlining management
              processes, reducing project overruns, and improving application
              performance. I am skilled in collaborating with diverse teams and
              applying Agile methodologies to manage sensitive data across
              multiple countries.
            </div>
            <div>
              I am passionate about continuous learning and professional growth.
              I stay updated with the latest in web development and emerging
              technologies. Additionally, I take pride in mentoring individuals
              with no prior coding experience, guiding them toward securing
              employment in the technology industry.
            </div>
            <div>
              I am always looking to connect with professionals in the tech
              community. Feel free to reach out via LinkedIn or contact me
              directly at hunter.piggot.dev@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex-grow flex-shrink order-1 hidden w-full min-w-0 h-1/2 xl:h-full sm:block xl:w-1/3 xl:order-1">
          <img
            className="object-cover w-full h-full"
            src="/assets/react-code.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
