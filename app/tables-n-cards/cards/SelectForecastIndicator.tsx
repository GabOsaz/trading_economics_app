interface SelectBtnType {
  setIndicator: (arg0: string) => void
  indicators: string[] | undefined
  selectedIndicator: string
}

function SelectForecastIndicator({ setIndicator, indicators, selectedIndicator }: SelectBtnType) {
  return (
    <div className="w-52 flex items-center space-x-2">
      <h2 className="text-xs md:text-sm"> Index: </h2>
      <select
        onChange={(e) => setIndicator((e.target.value))}
        className="text-xs md:text-sm w-full bg-transparent border border-opacity-75 border-cyan-300 rounded-[10px] p-2 cursor-pointer"
      >
        <option value={selectedIndicator}>{selectedIndicator}</option>
        {indicators?.map((indicator) => (
          <option key={indicator} value={indicator}>
            {indicator}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectForecastIndicator;
