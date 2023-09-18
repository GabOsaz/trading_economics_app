/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import useGetForecastData from '@/services/queries/useGetForecastData';
import { countryNames } from '@/utils/countryData';

function ForecastCompLogic() {
  const [selectedIndicator, setSelectedIndicator] = useState('2 Year Note Yield');
  const [country, setCountry] = useState(countryNames[0]);
  const { data, isLoading } = useGetForecastData(country);

  const categories = data?.map((indicator) => indicator?.Category);
  const selectedIndicatorData = () => data?.filter((each) => each?.Category === selectedIndicator);

  useEffect(() => {
    if (selectedIndicatorData() === undefined) {
      selectedIndicatorData();
    }
  }, [selectedIndicator, country]);

  return {
    country,
    setCountry,
    selectedIndicator,
    setSelectedIndicator,
    categories,
    isLoading,
    selectedIndicatorData,
  };
}

export default ForecastCompLogic;
