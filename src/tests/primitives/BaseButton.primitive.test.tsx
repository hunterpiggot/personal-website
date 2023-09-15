import React from "react";
import { render, screen } from "@testing-library/react";
import { BaseButton } from "../../primitives";

describe("BaseButton", () => {
  it("should all required props and extra css", async () => {
    const mockOnClick = jest.fn();
    const mockLabel = "label";
    const mockColor = "black";
    const mockDisabled = false;
    const mockExtraCss = "extra-css";
    const mockCustomClass = "";
    const testid = "mock-testid";

    render(
      <BaseButton
        onClick={mockOnClick}
        label={mockLabel}
        color={mockColor}
        disabled={mockDisabled}
        extraCss={mockExtraCss}
        customClass={mockCustomClass}
        testid={testid}
      />
    );

    const mainDiv = await screen.findByTestId("mock-testid");
    const button = await screen.findByTestId("mock-testid.button");

    button.click();

    expect(button.textContent).toBe("label");

    expect(mainDiv).toHaveClass("bg-custom-black");
    expect(mainDiv).toHaveClass("extra-css");

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  it("should all required props, custom css, and disabled", async () => {
    const mockOnClick = jest.fn();
    const mockLabel = "label";
    const mockColor = "white";
    const mockDisabled = true;
    const mockExtraCss = "extra-css";
    const mockCustomClass = "custom-css";
    const testid = "mock-testid";

    render(
      <BaseButton
        onClick={mockOnClick}
        label={mockLabel}
        color={mockColor}
        disabled={mockDisabled}
        extraCss={mockExtraCss}
        customClass={mockCustomClass}
        testid={testid}
      />
    );

    const mainDiv = await screen.findByTestId("mock-testid");
    const button = await screen.findByTestId("mock-testid.button");

    button.click();

    expect(button.textContent).toBe("label");

    expect(mainDiv.className).toBe("custom-css");

    expect(mockOnClick).toHaveBeenCalledTimes(0);
  });
});
