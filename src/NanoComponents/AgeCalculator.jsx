import dayjs from "dayjs";

export default function AgeCalculator() {
  const currentAge = dayjs().diff(dayjs("1997-12-23"), "year");

  return <span>{currentAge} ans</span>;
}
