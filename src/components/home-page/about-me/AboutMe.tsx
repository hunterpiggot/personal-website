export const AboutMe = () => {
  return (
    <div className="h-screen bg-custom-white flex flex-col-reverse py-24 px-12 md:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      {/* Text */}
      <div className="flex-grow w-full text-center order-2 md:order-2">
        <div className="text-c-xl">About me</div>
        <div className="w-full h-1 bg-custom-teal"></div>
        <div className="text-c-md pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum
          voluptatum in voluptatem, corrupti error sint ratione neque cumque eum
          officiis ullam temporibus, pariatur necessitatibus velit dolore.
          Atque, fugiat rem. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Facere commodi veniam ab dignissimos quo at recusandae officia
          explicabo, eum unde itaque suscipit expedita consequatur autem
          doloremque aspernatur quod saepe est.
        </div>
      </div>
      {/* Image */}
      <div className="hidden sm:block flex-grow flex-shrink w-full md:w-1/3 min-w-0 order-1 md:order-1">
        <img
          className="w-full h-full object-cover"
          src="/assets/fake-react-code.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
