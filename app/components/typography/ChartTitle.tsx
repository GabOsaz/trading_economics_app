interface ChartTitleProp {
  title: string
}

function ChartTitle({ title }: ChartTitleProp) {
  return (
    <h2 className="text-center text-base md:text-xl mb-6 font-semibold">{title}</h2>
  );
}

export default ChartTitle;
