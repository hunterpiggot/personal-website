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
    max: 7,
    color: "#00D37E",
    yearChange: [
      { year: ["1", "9"], idx: 0 },
      { year: ["2", "0"], idx: 3 },
    ],
  },
  {
    min: 8,
    max: 12,
    color: "#F7C839",
    yearChange: [],
  },
  {
    min: 13,
    max: 15,
    color: "#FD9540",
    yearChange: [],
  },
  {
    min: 16,
    max: 24,
    color: "#FF3E0D",
    yearChange: [],
  },
  {
    min: 25,
    max: 29,
    color: "#00BEFF",
    yearChange: [],
  },
  {
    min: 30,
    max: 33,
    color: "#FF685F",
    yearChange: [],
  },
  {
    min: 34,
    max: 34,
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
