/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/extensions */

import { countryNames, countryColors } from '@/utils/countryData';

interface RadioBtnsProps {
  selectedOption: number,
  onValueChange: (index: number) => void,
}

function RadioBtns({ selectedOption, onValueChange }: RadioBtnsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:items-center mt-4 mb-7 md:mb-2 sm:space-x-6">
      {countryNames.map((country, index) => (
        <label key={country} className="flex space-x-2 z-50 text-sm md:text-base italic">
          <input
            type="radio"
            value={country}
            checked={selectedOption === index}
            onChange={() => onValueChange(index)}
            className="cursor-pointer"
          />
          <span
            className="cursor-pointer z-50"
            style={{
              color: index === selectedOption ? countryColors[index] : '',
            }}
          >
            {country}
          </span>
        </label>
      ))}
    </div>
  );
}

export default RadioBtns;
