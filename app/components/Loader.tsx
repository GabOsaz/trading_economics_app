/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */

import constructArray from '@/utils/constructArray';

function Loader({ length }: { length: number }) {
  const isEven = (index: number) => (index % 2) === 0;

  return (
    <div className="flex flex-col">
      {constructArray(length).map((each) => (
        <div key={each + 1} className={`w-full ${isEven(each) ? 'opacity-80' : 'opacity-25'} bg-slate-400 h-8 mb-6 animate-pulse`} />
      ))}
    </div>
  );
}

export default Loader;
