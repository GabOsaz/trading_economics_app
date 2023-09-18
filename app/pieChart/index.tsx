/* eslint-disable import/prefer-default-export */

'use client';

import { Pie } from 'react-chartjs-2';
import usePieChartLogic from './usePieChartLogic';
import ChartTitle from '../components/typography/ChartTitle';

export function PieChart() {
  const { options, data } = usePieChartLogic();

  return (
    <div className="w-3/4 md:w-1/2">
      <ChartTitle title="Compare Full Year GDP Growth" />
      <div className="h-[30rem] md:h-[37rem]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
