interface IBarColorsAndRange {
  min: number; // Inclusive
  max: number; // Inclusive
  color: string;
  yearChange: {
    idx: number;
    year: string[];
  }[];
}
const barColorsAndRange: IBarColorsAndRange[] = [
  {
    min: 0,
    max: 9,
    color: "#00D37E",
    yearChange: [{ year: ["2", "1"], idx: 5 }],
  },
  {
    min: 10,
    max: 18,
    color: "#F7C839",
    yearChange: [{ year: ["2", "2"], idx: 17 }],
  },
  {
    min: 19,
    max: 29,
    color: "#00BEFF",
    yearChange: [],
  },
  {
    min: 30,
    max: 35,
    color: "#FF685F",
    yearChange: [{ year: ["2", "3"], idx: 30 }],
  },
  {
    min: 36,
    max: 38,
    color: "#AF50FF",
    yearChange: [],
  },
];
export const TimelineBars = () => {
  const getBars = () => {
    const bars: JSX.Element[] = [];
    barColorsAndRange.forEach((item, idx) => {
      for (let i = item.min; i <= item.max; i++) {
        const yearChange = item.yearChange.find(
          (change, idx) => change.idx === i
        );

        let yearString: string[] = [];
        if (yearChange) {
          yearString = yearChange.year;
        }

        const correctBar = (
          <div
            key={`${idx}-${i}`}
            style={{ backgroundColor: item.color }}
            className={`flex md:flex-col h-5 md:h-36 w-full md:w-[80px] text-2xl items-center justify-center`}
          >
            <div>{yearString[0]}</div>
            <div>{yearString[1]}</div>
          </div>
        );
        bars.push(correctBar);
      }
    });
    return bars;
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-stretch gap-1 md:gap-2">
      {getBars()}
    </div>
  );
};
