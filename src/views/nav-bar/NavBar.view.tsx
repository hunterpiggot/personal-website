import { IRefLookup } from "../../components";

interface INavBarProps {
  isNavOpen: boolean;
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToRef: (refLookup: keyof IRefLookup) => void;
}

export const NavBarView = ({
  isNavOpen,
  setIsNavOpen,
  scrollToRef,
}: INavBarProps) => {
  return (
    <div className="flex items-center justify-between px-10 py-8">
      <div></div>
      <nav className="w-full">
        <section className="flex justify-end MOBILE-MENU sm:hidden">
          <div
            data-testid="app.nav-bar.mobile-menu.hamburger-icon"
            className="space-y-2 cursor-pointer HAMBURGER-ICON"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div
            className={`bg-custom-white ${
              isNavOpen ? "showMenuNav" : "hideMenuNav"
            }`}
          >
            <div
              data-testid="app.nav-bar.mobile-menu.cross-icon"
              className="absolute top-0 right-0 px-8 py-8 cursor-pointer CROSS-ICON"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="w-8 h-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-custom-black">
              <li
                data-testid="app.nav-bar.mobile-menu.link.about"
                onClick={() => scrollToRef("about")}
                className="my-8 uppercase border-b border-gray-400 cursor-pointer"
              >
                About
              </li>
              <li
                data-testid="app.nav-bar.mobile-menu.link.technologies"
                onClick={() => scrollToRef("technologies")}
                className="my-8 uppercase border-b border-gray-400 cursor-pointer"
              >
                Technologies
              </li>
              <li
                data-testid="app.nav-bar.mobile-menu.link.projects"
                onClick={() => scrollToRef("projects")}
                className="my-8 uppercase border-b border-gray-400 cursor-pointer"
              >
                Projects
              </li>
              <li
                data-testid="app.nav-bar.mobile-menu.link.timeline"
                onClick={() => scrollToRef("timeline")}
                className="my-8 uppercase border-b border-gray-400 cursor-pointer"
              >
                Timeline
              </li>
              <li
                data-testid="app.nav-bar.mobile-menu.link.contact"
                onClick={() => scrollToRef("contact")}
                className="my-8 uppercase border-b border-gray-400 cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>
        </section>

        <ul
          data-testid="app.nav-bar.desktop-menu"
          className="justify-between hidden w-full space-x-8 DESKTOP-MENU sm:flex text-c-lg text-custom-white"
        >
          <li
            data-testid="app.nav-bar.desktop-menu.link.about"
            onClick={() => scrollToRef("about")}
            className="cursor-pointer"
          >
            About
          </li>
          <li
            data-testid="app.nav-bar.desktop-menu.link.technologies"
            onClick={() => scrollToRef("technologies")}
            className="cursor-pointer"
          >
            Technologies
          </li>
          {/* <li
            data-testid="app.nav-bar.desktop-menu.link.projects"
            onClick={() => scrollToRef("projects")}
            className="cursor-pointer"
          >
            Projects
          </li> */}
          <li
            data-testid="app.nav-bar.desktop-menu.link.timeline"
            onClick={() => scrollToRef("timeline")}
            className="cursor-pointer"
          >
            Timeline
          </li>
          <li
            data-testid="app.nav-bar.desktop-menu.link.contact"
            onClick={() => scrollToRef("contact")}
            className="cursor-pointer"
          >
            Contact
          </li>
          {/* <li className="cursor-pointer">Blog</li> */}
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
};
