import { IToastMessageState } from "@/models";
import { BaseButton, BaseInput, LoadingSpinner } from "@/primitives";
import { IContactMeFormValues } from "./ContactMe";
import { useState } from "react";
import { handleContactMeSubmit } from "./helpers";

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitMessage: (item: IToastMessageState) => void;
}

export const ContactMeForm = ({
  loading,
  setLoading,
  setSubmitMessage,
}: Props) => {
  const [formValues, setFormValues] = useState<IContactMeFormValues>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const handleInputChange = (
    e: EventTarget & HTMLInputElement,
    inputName: "name" | "phone" | "email"
  ) => {
    const newValue = e.value;
    setFormValues((initialState) => ({
      ...initialState,
      [inputName]: newValue,
    }));
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setFormValues((initialState) => ({
      ...initialState,
      message: newValue,
    }));
  };

  const handleSubmit = async () => {
    await handleContactMeSubmit({
      formValues,
      setLoading,
      setFormValues,
      setSubmitMessage,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-custom-black rounded-2xl md:py-16 lg:py-20 mt-14">
      <div className="grid w-3/4 grid-rows-2 pb-16 md:grid-cols-2 gap-14 sm:gap-4 md:gap-x-6 lg:gap-x-8">
        <BaseInput
          label="Name:"
          extraBaseCss=""
          value={formValues.name}
          type="text"
          handleChange={(e) => handleInputChange(e, "name")}
          color="white"
          testid="app.contact.name"
        />
        <BaseInput
          label="Phone:"
          extraBaseCss=""
          value={formValues.phone}
          type="text"
          handleChange={(e) => handleInputChange(e, "phone")}
          color="white"
          testid="app.contact.phone"
        />
      </div>
      <div className="items-center justify-center w-3/4">
        <BaseInput
          extraBaseCss="w-full justify-center flex"
          extraInputCss="w-full"
          extraLabelCss="align-middle self-center"
          label="Email:"
          value={formValues.email}
          type="email"
          handleChange={(e) => handleInputChange(e, "email")}
          color="white"
          testid="app.contact.email"
        />
      </div>
      <div className="w-3/4 h-full my-8">
        <div
          data-testid="app.contact.message"
          className="flex flex-col align-middle gap-x-6"
        >
          <label
            data-testid="app.contact.message.label"
            className="text-center text-c-lg text-custom-white"
          >
            Message
          </label>
          <textarea
            data-testid="app.contact.message.input"
            className="flex-grow h-40 min-w-0 px-4 py-1 rounded-xl text-c-md bg-custom-white text-custom-black"
            onChange={handleMessageChange}
            value={formValues.message}
            rows={5}
            cols={60}
          />
        </div>
      </div>
      <div className="w-1/4">
        <BaseButton
          label="Send"
          onClick={handleSubmit}
          color="white"
          extraCss=""
          disabled={loading}
          showSlot={loading}
          slot={<LoadingSpinner />}
          testid="app.contact.send"
        />
      </div>
    </div>
  );
};
