/* eslint-disable import/extensions */
import { BarChart } from './barChart';
import { HorBarChart } from './horizontalBarChart';
import { PieChart } from './pieChart';
import LayoutContainer from './components/LayoutContainer';

export default function page() {
  return (
    <LayoutContainer>
      <div className="w-full h-screen pt-12 flex justify-center">
        <PieChart />
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <BarChart />
      </div>
      <div className="w-full h-screen flex items-center justify-center">
        <HorBarChart />
      </div>
    </LayoutContainer>
  );
}
