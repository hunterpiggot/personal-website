import { MouseEvent } from "react";

interface Props {
  label: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  color: "white" | "black";
  disabled?: boolean;
  extraCss?: string;
  customClass?: string;
  testid?: string;
}
export const BaseButton = (props: Props) => {
  const { label, onClick, color } = props;
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    onClick(e);
  };

  const getBaseCss = (): string => {
    const baseClass = [
      "cursor-pointer px-2.5 py-2 text-c-lg rounded-2xl text-center",
    ];
    if (color === "black") {
      baseClass.push("bg-custom-black text-custom-white");
    } else {
      baseClass.push("bg-custom-white text-custom-black");
    }
    if (props.customClass) {
      return props.customClass.trim();
    } else if (props.extraCss) {
      baseClass.push(props.extraCss.trim());
    }

    return baseClass.join(" ").trim();
  };

  return (
    <div
      data-testid={props.testid ? props.testid : "not-set"}
      className={getBaseCss()}
      onClick={handleClick}
    >
      <button
        data-testid={props.testid ? `${props.testid}.button` : "not-set"}
        disabled={props.disabled ? true : false}
      >
        {label}
      </button>
    </div>
  );
};
