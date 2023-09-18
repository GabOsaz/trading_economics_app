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
import chartTickColor from '@/utils/chartTickColor';
import formatNumber from '@/utils/formatNumber';

const useHorBarChartLogic = (countryIndex: number) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const { countriesGdp } = useGetGdpData('Sweden', 'Mexico', 'New Zealand', 'Thailand');

  const selectedData = countriesGdp.map((each) => each?.data?.filter((eachData) => (
    eachData?.Category === 'GDP from Agriculture'
        || eachData?.Category === 'GDP from Construction'
        || eachData?.Category === 'GDP from Manufacturing'
        || eachData?.Category === 'GDP from Mining'
        || eachData?.Category === 'GDP from Public Administration'
        || eachData?.Category === 'GDP from Transport'
        || eachData?.Category === 'GDP from Utilities'
  )));

  const unit = selectedData[countryIndex]?.[0]?.Unit;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
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
          callback(value: number) {
            return `${formatNumber(value)} ${unit}`;
          },
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
          color: chartTickColor,
        },
      },
    },
  };

  const labels = selectedData[0]?.map((each) => each?.Category);
  const data = {
    labels,
    datasets: [
      {
        label: 'Latest Value',
        data: selectedData[countryIndex]?.map((each) => each?.LatestValue),
        backgroundColor: '#4ef583',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
      {
        label: 'Previous Value',
        data: selectedData[countryIndex]?.map((each) => each?.PreviousValue),
        backgroundColor: '#c77cf2',
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
    ],
  };
  return {
    options, data,
  };
};

export default useHorBarChartLogic;
