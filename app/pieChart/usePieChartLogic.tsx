/* eslint-disable import/extensions */
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import useGetGdpData from '@/services/queries/useGetGdpData';
import chartTickColor from '@/utils/chartTickColor';
import { countryNames } from '@/utils/countryData';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        color: chartTickColor,
      },
    },
    title: {
      display: false,
    },
  },
};

const usePieChartLogic = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const { countriesGdp } = useGetGdpData(...countryNames);

  // GDP per Capita
  const selectedData = countriesGdp.map((each) => each?.data?.filter((eachData) => (
    eachData?.Category === 'Full Year GDP Growth'
  )));
  const chartData = selectedData.flat()?.map((each) => each?.LatestValue);

  const labels = countryNames;
  const data = {
    labels,
    datasets: [
      {
        label: 'Full Year GDP Growth',
        data: chartData,
        backgroundColor: [
          '#c77cf2', '#4ef583', '#5bc7f5', '#ED774E',
        ],
        borderColor: [
          '#c77cf2', '#4ef583', '#5bc7f5', '#ED774E',
        ],
      },
    ],
  };
  return {
    options, data,
  };
};

export default usePieChartLogic;
