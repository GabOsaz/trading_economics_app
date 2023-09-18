/* eslint-disable import/extensions */
import ForecastValuesInterface from '@/types/ForecastValuesInterface';
import formatDate from '@/utils/formatDate';

const thead = ['Indicator', 'Latest Value', 'Q1', 'Q2', 'Q3', 'Q4', 'Frequency'];

function ForecastValues({ data }: ForecastValuesInterface) {
  const values = data?.length ? data[0] : undefined;
  return (
    <div className="w-full overflow-x">
      <div className="overflow-x-auto mt-4 flex justify-start">
        <table>
          <thead className="rounded-tl-lg text-sm md:text-base">
            <tr>
              {thead.map((title, index) => (
                <th key={title} className={`${!index && 'rounded-tl-lg'} text-start px-2 md:px-6 py-4 bg-cyan-900`}>
                  {title}
                  {' '}
                  {(index && title !== 'Frequency') ? `(${values?.Unit})` : null}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">

            {/* Values */}
            <tr className="text-white">
              <td className="td bg-cyan-900 font-bold">Values</td>
              <td className="td font-medium">{values?.LatestValue}</td>
              <td className="td">{values?.q1}</td>
              <td className="td">{values?.q2}</td>
              <td className="td">{values?.q3}</td>
              <td className="td">{values?.q4}</td>
              <td className="td">{values?.Frequency}</td>
            </tr>

            {/* Release dates */}
            <tr className="text-white">
              <td className="td bg-cyan-900 font-bold">Release dates</td>
              <td className="td font-medium">{values?.LatestValueDate ? formatDate(values?.LatestValueDate) : ''}</td>
              <td className="td">{values?.q1_date ? formatDate(values?.q1_date) : ''}</td>
              <td className="td">{values?.q2_date ? formatDate(values?.q2_date) : ''}</td>
              <td className="td">{values?.q3_date ? formatDate(values?.q3_date) : ''}</td>
              <td className="td">{values?.q4_date ? formatDate(values?.q4_date) : ''}</td>
              <td className="td">{' '}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForecastValues;
