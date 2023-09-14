import { useState } from "react";
import { BaseButton, BaseInput, PageTitle } from "../../../primitives";

interface IFormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactMe = () => {
  const [formValues, setFormValues] = useState<IFormValues>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const phoneNumberRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;
    const isEmailValid = emailRegex.test(formValues.email);
    const isPhoneValid = phoneNumberRegex.test(formValues.phone);

    const isContactValid = isEmailValid || isPhoneValid;
    const isNameValid = formValues.name.length > 0;
    const isMessageValid = formValues.message.length > 0;

    const isSubmitValid = isContactValid && isNameValid && isMessageValid;

    if (isSubmitValid) {
      console.log("ALL VALID - will submit");
    } else {
      console.log("NOT VALID - will show error");
    }
  };
  const handleNameChange = (e: EventTarget & HTMLInputElement) => {
    const newValue = e.value;
    setFormValues((initialState) => ({
      ...initialState,
      name: newValue,
    }));
  };
  const handlePhoneChange = (e: EventTarget & HTMLInputElement) => {
    const newValue = e.value;
    setFormValues((initialState) => ({
      ...initialState,
      phone: newValue,
    }));
  };
  const handleEmailChange = (e: EventTarget & HTMLInputElement) => {
    const newValue = e.value;
    setFormValues((initialState) => ({
      ...initialState,
      email: newValue,
    }));
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setFormValues((initialState) => ({
      ...initialState,
      message: newValue,
    }));
  };
  return (
    <div className="min-h-screen bg-custom-white py-8 px-4 sm:px-8 md:px-[50px]">
      <PageTitle title="Contact me" color="black" />

      <div className="flex flex-col items-center justify-center py-10 bg-custom-black rounded-2xl md:py-16 lg:py-20 mt-14">
        <div className="grid w-3/4 grid-rows-2 pb-16 md:grid-cols-2 gap-14 sm:gap-4 md:gap-x-6 lg:gap-x-8">
          <BaseInput
            label="Name:"
            extraBaseCss=""
            value={formValues.name}
            type="text"
            handleChange={handleNameChange}
            color="white"
          />
          <BaseInput
            label="Phone:"
            extraBaseCss=""
            value={formValues.phone}
            type="text"
            handleChange={handlePhoneChange}
            color="white"
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
            handleChange={handleEmailChange}
            color="white"
          />
        </div>
        <div className="w-3/4 h-full my-8">
          <div className="flex flex-col align-middle gap-x-6">
            <label className="text-center text-c-lg text-custom-white">
              Message
            </label>
            <textarea
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
          />
        </div>
      </div>
    </div>
  );
};
