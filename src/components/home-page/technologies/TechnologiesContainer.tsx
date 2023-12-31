import React, { useEffect, useRef, useState } from "react";
import { ITechnologyLogo } from "./Technologies";

interface Props {
  logos: ITechnologyLogo[];
  title: string;
}

export const TechnologiesContainer = ({ logos, title }: Props) => {
  const [svgSize, setSvgSize] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  const getIconSize = (containerSize: number) => {
    if (containerSize >= 553) {
      return 136;
    } else if (containerSize <= 280) {
      return 32;
    } else {
      const adjustedSize = containerSize * 0.38095238095238093 - 74.67;
      return adjustedSize;
    }
  };
  // Detect container width
  useEffect(() => {
    function handleResize() {
      if (containerRef.current) {
        setSvgSize(getIconSize(containerRef.current.offsetWidth));
      }
    }
    // Initial set
    handleResize();
    // Attach event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const lastRowCount = logos.length % 3;

  const getFullRows = () => {
    const fullRows = [];
    const fullRowsLength = logos.length - lastRowCount;
    for (let i = 0; i < fullRowsLength; i++) {
      const correctItem = logos[i];
      const item = (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.open(correctItem.link, "_blank")}
        >
          {React.cloneElement(correctItem.logo, {
            width: svgSize,
            height: svgSize,
          })}
          <div className="text-center text-custom-black text-c-md">
            {correctItem.title}
          </div>
        </div>
      );
      fullRows.push(item);
    }
    return fullRows;
  };

  const getLastRow = () => {
    const lastRow = [];
    const startingIndex = logos.length - lastRowCount;
    for (let i = startingIndex; i < logos.length; i++) {
      const correctItem = logos[i];
      const item = (
        <div
          key={i}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.open(correctItem.link, "_blank")}
        >
          {React.cloneElement(correctItem.logo, {
            width: svgSize,
            height: svgSize,
          })}
          <div className="text-center text-custom-black text-c-md">
            {correctItem.title}
          </div>
        </div>
      );
      lastRow.push(item);
    }
    return lastRow;
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center w-full h-full"
    >
      <div className="text-c-lg">{title}</div>
      <div className="grid items-center flex-grow w-full grid-cols-3 gap-4 p-4 bg-custom-white rounded-2xl">
        {getFullRows()}
        <div className="flex justify-center col-span-3">{getLastRow()}</div>
      </div>
    </div>
  );
};
