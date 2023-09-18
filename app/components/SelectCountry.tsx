/* eslint-disable import/extensions */
import { countryNames } from '@/utils/countryData';

interface SelectCountryType {
  setCountry: (arg0: string) => void
}

function SelectCountry({ setCountry }: SelectCountryType) {
  return (
    <div className="flex space-x-1 md:space-x-2 items-center my-6">
      <h2 className="text-xs md:text-sm"> Country: </h2>
      <select
        onChange={(e) => setCountry(e.target.value)}
        className="text-xs md:text-sm bg-transparent border border-opacity-75 border-cyan-300 rounded-[10px] p-2 cursor-pointer"
      >
        {countryNames.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectCountry;
