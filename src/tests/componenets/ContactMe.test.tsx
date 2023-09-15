import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ContactMe } from "../../components/home-page/contact-me";

describe("tests about me page", () => {
  it("Should handle all inputs", async () => {
    render(<ContactMe />);

    const nameInput: any = await screen.findByTestId("app.contact.name.input");
    const phoneInput: any = await screen.findByTestId(
      "app.contact.phone.input"
    );
    const emailInput: any = await screen.findByTestId(
      "app.contact.email.input"
    );
    const messageInput: any = await screen.findByTestId(
      "app.contact.message.input"
    );

    const sendButton = await screen.findByTestId("app.contact.send.button");

    fireEvent.change(nameInput, { target: { value: "name" } });
    fireEvent.change(phoneInput, { target: { value: "phone" } });
    fireEvent.change(emailInput, { target: { value: "email" } });
    fireEvent.change(messageInput, { target: { value: "message" } });

    expect(nameInput.value).toBe("name");
    expect(phoneInput.value).toBe("phone");
    expect(emailInput.value).toBe("email");
    expect(messageInput.value).toBe("message");

    sendButton.click();
  });
});
