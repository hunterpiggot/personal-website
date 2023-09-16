import { useState } from "react";
import { PageTitle } from "../../../primitives";
import { ContactMeForm } from "./ContactMeForm";
import { IToastMessageState } from "../../../models";

export interface IContactMeFormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactMe = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<IToastMessageState>({
    showMessage: false,
    message: null,
  });

  return (
    <div
      data-testid="app.contact"
      className="min-h-screen bg-custom-white py-8 px-4 sm:px-8 md:px-[50px]"
    >
      <PageTitle title="Contact me" color="black" />
      {submitMessage.showMessage && submitMessage.message}
      <ContactMeForm
        loading={loading}
        setLoading={setLoading}
        setSubmitMessage={setSubmitMessage}
      />
    </div>
  );
};
