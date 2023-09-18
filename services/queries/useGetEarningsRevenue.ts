/* eslint-disable import/extensions */

'use client';

import { useQuery } from '@tanstack/react-query';
import { EarningsRevenueInterface } from '@/types/earningsRevenue';

async function getEarningsRevenueData(country: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/earnings-revenues/country/${country}?d1=2023-01-01&d2=2023-12-31&c=${process.env.NEXT_PUBLIC_USER_KEY}`);
  const data = (await res.json()) as EarningsRevenueInterface[];
  return data;
}

const useGetEarningsRevenue = (country: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['earnings-revenue', country],
    queryFn: () => getEarningsRevenueData(country),
  });

  return { data, isLoading };
};

export default useGetEarningsRevenue;
