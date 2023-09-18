/* eslint-disable import/extensions */
import { useState } from 'react';
import useGetEarningsRevenue from '@/services/queries/useGetEarningsRevenue';
import { countryNames } from '@/utils/countryData';

function EarningsCompLogic() {
  const [country, setCountry] = useState(countryNames[0]);
  const { data, isLoading } = useGetEarningsRevenue(country);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);
  const startIndex = currentPage * postsPerPage - postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedData = data?.slice(startIndex, endIndex);
  const tHead = ['Company Name', 'Previous Earnings', 'Forcasted Earnings', 'Actual Earnings', 'Previous Revenue', 'Forcasted Revenue', 'Actual Revenue', 'Last Updated', 'Importance'];

  return {
    setCountry,
    setPostsPerPage,
    paginateFront,
    paginateBack,
    isLoading,
    tHead,
    paginatedData,
    postsPerPage,
    data,
    currentPage,
  };
}

export default EarningsCompLogic;
