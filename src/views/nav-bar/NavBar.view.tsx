import { useState } from "react";

export const NavBarView = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between w-full pt-6 md:pt-8 text-white text-c-lg 3xl:pt-14 2xl:pt-12 xl:pt-10 xl:px-[133px] lg:px-24 md:px-18 sm:px-12 px-6 font-bold">
      <div className="hidden sm:flex">
        <div>About</div>
        <div>Technologies</div>
        <div>Projects</div>
        <div>Timeline</div>
        <div>Contact</div>
        <div>Blog</div>
      </div>
      <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {/* Hamburger icon can go here */}x 🍔
      </button>
      {isOpen && (
        <div className="flex flex-col sm:hidden">
          <div>About</div>
          <div>Technologies</div>
          <div>Projects</div>
          <div>Timeline</div>
          <div>Contact</div>
          <div>Blog</div>
        </div>
      )}
    </div>
  );
};
