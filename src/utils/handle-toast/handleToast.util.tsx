import { toastMessages } from "../../constants";
import { IToastMessageState } from "../../models";
import { ErrorToast, SuccessToast } from "../../primitives";

interface Props {
  type: "success" | "error";
  toastMessage: keyof typeof toastMessages;
  setToast: (item: IToastMessageState) => void;
}
export const handleToast = ({ type, toastMessage, setToast }: Props) => {
  const { title, message } = toastMessages[toastMessage];
  if (type === "success") {
    setToast({
      showMessage: true,
      message: <SuccessToast title={title} message={message} />,
    });
  } else if (type === "error") {
    setToast({
      showMessage: true,
      message: <ErrorToast title={title} message={message} />,
    });
  }

  setTimeout(() => {
    setToast({
      showMessage: false,
      message: null,
    });
  }, 5000);
};
