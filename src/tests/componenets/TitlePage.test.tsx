import React from "react";
import { render, screen } from "@testing-library/react";
// import { TitlePage } from "../../components/home-page/title-page";
import "@testing-library/jest-dom/extend-expect";

describe.skip("tests about me page", () => {
  it("Should handle desktop navbar click", async () => {
    const mockSetIsNavOpen = jest.fn();
    const mockScrollToRef = jest.fn();
    const mockIsNavOpen = false;
    // render(
    //   <TitlePage
    //     isNavOpen={mockIsNavOpen}
    //     scrollToRef={mockScrollToRef}
    //     setIsNavOpen={mockSetIsNavOpen}
    //   />
    // );
    const aboutNavButton = await screen.findByTestId(
      "app.nav-bar.desktop-menu.link.about"
    );
    const technologiesNavButton = await screen.findByTestId(
      "app.nav-bar.desktop-menu.link.technologies"
    );
    const projectsNavButton = await screen.findByTestId(
      "app.nav-bar.desktop-menu.link.projects"
    );
    const timelineNavButton = await screen.findByTestId(
      "app.nav-bar.desktop-menu.link.timeline"
    );
    const contactNavButton = await screen.findByTestId(
      "app.nav-bar.desktop-menu.link.contact"
    );
    aboutNavButton.click();
    technologiesNavButton.click();
    projectsNavButton.click();
    timelineNavButton.click();
    contactNavButton.click();
    expect(mockScrollToRef).toHaveBeenCalledTimes(5);
  });
  it("Should handle mobile navbar click", async () => {
    const mockSetIsNavOpen = jest.fn();
    const mockScrollToRef = jest.fn();
    let mockIsNavOpen = false;
    // render(
    //   <TitlePage
    //     isNavOpen={mockIsNavOpen}
    //     scrollToRef={mockScrollToRef}
    //     setIsNavOpen={mockSetIsNavOpen}
    //   />
    // );
    const hamburgerMenuIcon = await screen.findByTestId(
      "app.nav-bar.mobile-menu.hamburger-icon"
    );
    const mobileMenuButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.cross-icon"
    );
    hamburgerMenuIcon.click();
    mockIsNavOpen = true;
    const aboutNavButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.link.about"
    );
    const technologiesNavButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.link.technologies"
    );
    const projectsNavButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.link.projects"
    );
    const timelineNavButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.link.timeline"
    );
    const contactNavButton = await screen.findByTestId(
      "app.nav-bar.mobile-menu.link.contact"
    );
    aboutNavButton.click();
    technologiesNavButton.click();
    projectsNavButton.click();
    timelineNavButton.click();
    contactNavButton.click();
    mobileMenuButton.click();
    expect(mockSetIsNavOpen).toHaveBeenCalledTimes(2);
    expect(mockScrollToRef).toHaveBeenCalledTimes(5);
  });
  it("should handle contact me click", async () => {
    const mockSetIsNavOpen = jest.fn();
    const mockScrollToRef = jest.fn();
    let mockIsNavOpen = false;
    // render(
    //   <TitlePage
    //     isNavOpen={mockIsNavOpen}
    //     scrollToRef={mockScrollToRef}
    //     setIsNavOpen={mockSetIsNavOpen}
    //   />
    // );
    const contactButton = await screen.findByTestId(
      "app.title-page.contact.button"
    );
    contactButton.click();
    expect(mockScrollToRef).toHaveBeenCalledTimes(1);
  });
  it("should handle resume me click", async () => {
    const mockSetIsNavOpen = jest.fn();
    const mockScrollToRef = jest.fn();
    let mockIsNavOpen = false;
    // render(
    //   <TitlePage
    //     isNavOpen={mockIsNavOpen}
    //     scrollToRef={mockScrollToRef}
    //     setIsNavOpen={mockSetIsNavOpen}
    //   />
    // );
    const resumeButton = await screen.findByTestId(
      "app.title-page.resume.button"
    );
    resumeButton.click();
    expect(mockScrollToRef).toHaveBeenCalledTimes(0);
  });
});
