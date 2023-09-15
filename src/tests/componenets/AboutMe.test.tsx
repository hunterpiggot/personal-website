import React from "react";
import { render, screen } from "@testing-library/react";
import { AboutMe } from "../../components/home-page/about-me";

describe("About me", () => {
  it("renders learn react link", () => {
    render(<AboutMe />);
    const linkElement = screen.getByText(/About me/i);
    expect(linkElement).toBeInTheDocument();
  });
});
