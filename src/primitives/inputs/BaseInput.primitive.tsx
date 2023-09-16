import { defaults } from "../../constants/defaults";

interface Props {
  value: number | string;
  handleChange: (e: EventTarget & HTMLInputElement) => void;
  type: "number" | "text" | "email";
  color: "white" | "black";
  label?: string;
  customLabelCss?: string;
  customInputCss?: string;
  customBaseCss?: string;
  extraLabelCss?: string;
  extraInputCss?: string;
  extraBaseCss?: string;
  testid?: string;
}

export const BaseInput = (props: Props) => {
  const { value, handleChange, type, color } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target);
  };

  const getInputCss = () => {
    const baseCss = ["rounded-xl text-c-md px-4 py-1 grow min-w-0 flex-grow"];

    if (color === "black") {
      baseCss.push("bg-custom-black text-custom-white");
    } else {
      baseCss.push("bg-custom-white text-custom-black");
    }

    if (props.customInputCss) {
      return props.customInputCss;
    } else if (props.extraInputCss) {
      baseCss.push(props.extraInputCss.trim());
    }

    return baseCss.join(" ").trim();
  };
  const getLabelCss = () => {
    const baseCss = ["text-center text-c-lg"];

    if (color === "black") {
      baseCss.push("text-custom-black");
    } else {
      baseCss.push("text-custom-white");
    }
    if (props.customLabelCss) {
      return props.customLabelCss;
    } else if (props.extraLabelCss) {
      baseCss.push(props.extraLabelCss.trim());
    }

    return baseCss.join(" ").trim();
  };
  const getBaseCss = () => {
    const baseCss = ["align-middle flex gap-x-2 md:gap-x-4 lg:gap-x-6"];
    if (props.customBaseCss) {
      return props.customBaseCss;
    } else if (props.extraBaseCss) {
      baseCss.push(props.extraBaseCss.trim());
    }

    return baseCss.join(" ").trim();
  };
  return (
    <div
      data-testid={props.testid ? props.testid : defaults.testid}
      className={getBaseCss()}
    >
      {props.label && (
        <label
          data-testid={props.testid ? `${props.testid}.label` : defaults.testid}
          className={getLabelCss()}
          htmlFor=""
        >
          {props.label}
        </label>
      )}
      <input
        data-testid={props.testid ? `${props.testid}.input` : defaults.testid}
        className={getInputCss()}
        onChange={handleInputChange}
        value={value}
        type={type}
      />
    </div>
  );
};
