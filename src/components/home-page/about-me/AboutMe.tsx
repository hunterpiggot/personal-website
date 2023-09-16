import fakeReactCode from "../../../../public/assets/fake-react-code.jpg";

export const AboutMe = () => {
  return (
    <div className="flex flex-col-reverse min-h-screen px-12 py-24 bg-custom-white xl:flex-row sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24">
      <div className="flex-grow order-2 w-full text-center xl:order-2">
        <div className="text-c-xl">About me</div>
        <div className="w-full h-1 bg-custom-teal"></div>
        <div className="flex-grow pt-4 text-sm sm:text-md md:text-lg lg:text-lg 2xl:text-xl 3xl:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nostrum
          voluptatum in voluptatem, corrupti error sint ratione neque cumque eum
          officiis ullam temporibus, pariatur necessitatibus velit dolore.
          Atque, fugiat rem. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Facere commodi veniam ab dignissimos quo at recusandae officia
          explicabo, eum unde itaque suscipit expedita consequatur autem
          doloremque aspernatur quod saepe est. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Natus nostrum voluptatum in voluptatem,
          corrupti error sint ratione neque cumque eum officiis ullam
          temporibus, pariatur necessitatibus velit dolore. Atque, fugiat rem.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
          commodi veniam ab dignissimos quo at recusandae officia explicabo, eum
          unde itaque suscipit expedita consequatur autem doloremque aspernatur
          quod saepe est.
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
