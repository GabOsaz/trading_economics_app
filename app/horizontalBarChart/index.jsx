/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable import/prefer-default-export */

'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import useHorBarChartLogic from './useHorBarChartLogic';
import RadioBtns from './RadioBtns';
import ChartTitle from '../components/typography/ChartTitle';

export function HorBarChart() {
  const [selectedOption, setSelectedOption] = useState(0);
  const { options, data } = useHorBarChartLogic(selectedOption);
  const onValueChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div className="w-full mt-6 relative px-4 sm:px-0 animate_fade_in_up">
      <ChartTitle title="Compare Previous to Latest GDP Values" />
      <RadioBtns selectedOption={selectedOption} onValueChange={onValueChange} />
      <div className="h-[27rem] md:h-[32rem]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
