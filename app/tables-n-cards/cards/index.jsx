/* eslint-disable no-nested-ternary */

'use client';

import SelectForecastIndicator from './SelectForecastIndicator';
import ForecastTable from './ForecastTable';
import Loader from '../../components/Loader';
import SelectCountry from '../../components/SelectCountry';
import TableTitle from '../../components/typography/tableTitle';
import ForecastCompLogic from './ForecastCompLogic';

function Forecast() {
  const {
    country,
    setCountry,
    selectedIndicator,
    setSelectedIndicator,
    categories,
    isLoading,
    selectedIndicatorData,
  } = ForecastCompLogic();

  return (
    <div className="mt-16 w-full h-3/4">
      <TableTitle title="Forecasts" />
      <div className="rounded-2xl w-full border border-transparent md:border-cyan-400 px-2 md:px-4 py-2 md:py-4">
        <div className="flex items-center justify-center xl:justify-end space-x-4">
          <SelectCountry setCountry={setCountry} />
          <SelectForecastIndicator
            selectedIndicator={selectedIndicator}
            setIndicator={setSelectedIndicator}
            indicators={categories}
          />
        </div>
        <div className="min-w-full">
          {
            !isLoading && !selectedIndicatorData()?.length
              ? <h2 className="text-center mt-4">{`${selectedIndicator} is unavailable for ${country}`}</h2>
              : !isLoading && selectedIndicatorData()?.length
                ? <ForecastTable isLoading={isLoading} data={selectedIndicatorData()} />
                : <Loader length={2} />
          }
        </div>
      </div>
    </div>
  );
}

export default Forecast;
