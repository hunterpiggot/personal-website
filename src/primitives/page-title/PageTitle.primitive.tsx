interface Props {
  title: string;
  color: "white" | "black";
  customLineCss?: string;
  customTitleCss?: string;
}

export const PageTitle = ({
  title,
  color,
  customLineCss,
  customTitleCss,
}: Props) => {
  const getLineCss = () => {
    const baseCss = ["w-full h-1 bg-custom-teal"];
    if (customLineCss && customLineCss.trim().length) {
      baseCss.push(customLineCss.trim());
    }

    return baseCss.join(" ").trim();
  };
  const getTitleCss = () => {
    const baseCss = ["text-c-xl text-center"];
    if (color === "black") {
      baseCss.push("text-custom-black");
    } else {
      baseCss.push("text-custom-white");
    }
    if (customTitleCss && customTitleCss.trim().length) {
      baseCss.push(customTitleCss.trim());
    }

    return baseCss.join(" ").trim();
  };
  return (
    <div>
      <div className={getTitleCss()}>{title}</div>
      <div className={getLineCss()}></div>
    </div>
  );
};
