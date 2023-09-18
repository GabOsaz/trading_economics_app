/* eslint-disable import/extensions */
import { useQueries } from '@tanstack/react-query';
import { GdpInterface } from '@/types/gdp';

async function getGdp(country: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/country/${country}?c=${process.env.NEXT_PUBLIC_USER_KEY}&group=gdp`);
  const gdp = (await res.json()) as GdpInterface[];
  return gdp;
}

function useGetGdpData(...args: string[]) {
  const countries = args;

  const countriesGdp = useQueries({
    queries: countries.map((country) => ({
      queryKey: ['country', country],
      queryFn: () => getGdp(country),
    })),
  });

  return {
    countriesGdp,
  };
}

export default useGetGdpData;
