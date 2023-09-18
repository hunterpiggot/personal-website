import { IToastMessageState } from "@/models";
import { handleToast } from "@/utils";
import { IContactMeFormValues } from "../ContactMe";

interface Props {
  formValues: IContactMeFormValues;
  setLoading: (item: boolean) => void;
  setFormValues: (values: IContactMeFormValues) => void;
  setSubmitMessage: (item: IToastMessageState) => void;
}

// @ts-ignore
const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;
console.log("🚀 ~ file: handleSubmit.ts:13 ~ baseUrl:", baseUrl);

const checkIsValidSubmit = ({
  name,
  email,
  phone,
  message,
}: IContactMeFormValues): boolean => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const phoneNumberRegex =
    /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/g;
  const isEmailValid = emailRegex.test(email);
  const isPhoneValid = phoneNumberRegex.test(phone);

  const isContactValid = isEmailValid || isPhoneValid;
  const isNameValid = name.length > 0;
  const isMessageValid = message.length > 0;

  const isSubmitValid = isContactValid && isNameValid && isMessageValid;

  return isSubmitValid;
};

export const handleContactMeSubmit = async ({
  formValues,
  setLoading,
  setFormValues,
  setSubmitMessage,
}: Props) => {
  const isSubmitValid = checkIsValidSubmit(formValues);

  if (isSubmitValid) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify(formValues);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    setLoading(true);

    try {
      const rawResponse = await fetch(
        `${baseUrl}/send-email`,
        requestOptions
      ).then((val) => val.text());
      console.log("🚀 ~ file: handleSubmit.ts:62 ~ rawResponse:", rawResponse);
      console.log("🚀 ~ file: handleSubmit.ts:60 ~ baseUrl:", baseUrl);

      const res = JSON.parse(rawResponse);
      // const res = {
      //   success: true,
      // };
      console.log("🚀 ~ file: handleSubmit.ts:65 ~ res:", res);

      if (res.success) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        handleToast({
          type: "success",
          toastMessage: "successContactMe",
          setToast: setSubmitMessage,
        });
      } else {
        handleToast({
          type: "error",
          toastMessage: "errorContactMe",
          setToast: setSubmitMessage,
        });
      }
    } catch (error) {
      console.error("error -->", error);
      handleToast({
        type: "error",
        toastMessage: "errorContactMe",
        setToast: setSubmitMessage,
      });
    }
    setLoading(false);
  } else {
    console.log("NOT VALID - will show error");
  }
};
