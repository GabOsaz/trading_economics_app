/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable import/extensions */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useGetGdpData from '@/services/queries/useGetGdpData';
import { countryNames } from '@/utils/countryData';
import chartTickColor from '@/utils/chartTickColor';
import formatNumber from '@/utils/formatNumber';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        usePointStyle: true,
        pointStyle: 'triangle',
        color: chartTickColor,
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        color: chartTickColor,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        // Include dollar sign in the ticks
        callback(value: number) {
          return `$${formatNumber(value)}`;
        },
        color: chartTickColor,
      },
      title: {
        display: true,
        text: 'GDP Values (USD)',
        color: 'rgb(8 145 178)',
        font: {
          family: 'Comic Sans MS' as const,
          size: 20 as const,
          style: 'bold' as const,
          lineHeight: 1.2 as const,
        },
        padding: {
          top: 0, left: 0, right: 0, bottom: 10,
        },
      },
    },
  },
};

const useBarChartLogic = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const { countriesGdp } = useGetGdpData(...countryNames);

  const selectedData = countriesGdp.map((each) => each?.data?.filter((eachData) => (
    eachData?.Category === 'GDP from Agriculture'
      || eachData?.Category === 'GDP from Construction'
      || eachData?.Category === 'GDP from Manufacturing'
      || eachData?.Category === 'GDP from Mining'
      || eachData?.Category === 'GDP from Public Administration'
      || eachData?.Category === 'GDP from Transport'
      || eachData?.Category === 'GDP from Utilities'
  )));

  const labels = selectedData[0]?.map((each) => each?.Category);
  const data = {
    labels,
    datasets: [
      {
        label: 'Sweden',
        data: selectedData[0]?.map((each) => each?.LatestValue * 0.091),
        backgroundColor: '#c77cf2',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: 'Mexico',
        data: selectedData[1]?.map((each) => each?.LatestValue * 0.059),
        backgroundColor: '#4ef583',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: 'New Zealand',
        data: selectedData[2]?.map((each) => each?.LatestValue * 0.60),
        backgroundColor: '#5bc7f5',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
      {
        label: 'Thailand',
        data: selectedData[3]?.map((each) => each?.LatestValue * 0.028),
        backgroundColor: '#ED774E',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.9,
        categoryPercentage: 0.7,
      },
    ],
  };
  return {
    options, data,
  };
};

export default useBarChartLogic;
