/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */

'use client';

import Pagination from '../../components/Pagination';
import formatDate from '@/utils/formatDate';
import SelectDataQtyPerPage from '../../components/SelectDataQtyPerPage';
import SelectCountry from '@/app/components/SelectCountry';
import Loader from '../../components/Loader';
import { EarningsRevenueInterface } from '@/types/earningsRevenue';
import EarningsCompLogic from './EarningsCompLogic';
import TableTitle from '@/app/components/typography/tableTitle';

function EarningsRevenueTable() {
  const {
    setCountry,
    setPostsPerPage,
    isLoading,
    tHead,
    paginatedData,
    postsPerPage,
    data,
    paginateFront,
    paginateBack,
    currentPage,
  } = EarningsCompLogic();

  return (
    <div className="flex flex-col px-4 sm:px-0">
      <TableTitle extraClasses="mb-2" title="Earnings" />
      <div className="flex items-center justify-center xl:justify-end space-x-2 md:space-x-6">
        <SelectCountry setCountry={setCountry} />
        <SelectDataQtyPerPage setPostsPerPage={setPostsPerPage} />
      </div>
      <Table
        isLoading={isLoading}
        tHead={tHead}
        paginatedData={paginatedData}
      />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginateFront={paginateFront}
        paginateBack={paginateBack}
        currentPage={currentPage}
        isLoading={isLoading}
      />
    </div>
  );
}

interface TablePropTypes {
  isLoading: boolean
  tHead: string[]
  paginatedData: EarningsRevenueInterface[] | undefined
}

function Table({ isLoading, tHead, paginatedData }: TablePropTypes) {
  return (
    <div className="rounded-2xl border overflow-x-auto border-transparent md:border-cyan-400">
      {!isLoading ? (
        <table>
          <thead
            className="border-b border-b-gray-500 bg-cyan-900 bg-opacity-75 rounded-3xl text-sm md:text-base md:border-t-cyan-400 font-medium text-white md:dark:border-cyan-800"
          >
            <tr>
              {tHead.map((title) => (
                <th key={title} className="text-start px-2 md:px-6 py-4">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {paginatedData?.map((eachData) => (
              <tr key={eachData?.Name} className="text-white">
                <td className="td font-medium">{eachData?.Name}</td>
                <td className="td">{eachData?.PreviousValue || 'Unavailable'}</td>
                <td className="td">{eachData?.ForecastValue || 'Unavailable'}</td>
                <td className="td">{eachData?.ActualValue || 'Unavailable'}</td>
                <td className="td">{eachData?.RevenuePrevious || 'Unavailable'}</td>
                <td className="td">{eachData?.RevenueForecast || 'Unavailable'}</td>
                <td className="td">{eachData?.Revenue || 'Unavailable'}</td>
                <td className="td">{eachData?.LastUpdate ? formatDate(eachData?.LastUpdate) : ''}</td>
                <td className="td">{eachData?.Importance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <Loader length={10} />}
    </div>
  );
}

export default EarningsRevenueTable;
