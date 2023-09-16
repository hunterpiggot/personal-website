import { ErrorToastSvg } from "../../assets";

interface Props {
  title: string;
  message: string;
}
export const ErrorToast = ({ title, message }: Props) => {
  return (
    <div
      className="px-4 py-3 mt-3 text-red-900 bg-red-100 border-t-4 border-red-500 rounded-b shadow-md sm:mt-4 md:mt-6 lg:mt-10"
      role="alert"
    >
      <div className="flex ">
        <div className="flex items-center py-1">{ErrorToastSvg}</div>
        <div>
          <p className="text-c-lg">{title}</p>
          <p className="text-c-md">{message}</p>
        </div>
      </div>
    </div>
  );
};
