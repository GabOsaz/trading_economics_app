/* eslint-disable import/extensions */

'use client';

import { useQuery } from '@tanstack/react-query';
import { Forecast } from '@/types/forecastInterface';

export async function getForecastData(country: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/forecast/country/${country}?c=${process.env.NEXT_PUBLIC_USER_KEY}`);
  const data = (await res.json()) as Forecast[];
  return data;
}

const useGetForecastData = (country: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['forecast', country],
    queryFn: () => getForecastData(country),
  });

  return { data, isLoading };
};

export default useGetForecastData;
