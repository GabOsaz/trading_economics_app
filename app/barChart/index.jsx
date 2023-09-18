/* eslint-disable import/prefer-default-export */

'use client';

import { Bar } from 'react-chartjs-2';
import useBarChartLogic from './useBarChartLogic';
import ChartTitle from '../components/typography/ChartTitle';

export function BarChart() {
  const { options, data } = useBarChartLogic();

  return (
    <div className="w-full">
      <ChartTitle title="Compare GDP from Different Sectors" />
      <div className="h-[27rem] md:h-[32rem]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
