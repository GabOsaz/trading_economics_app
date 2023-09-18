import EarningsRevenueTable from './tables/EarningsRevenueTable';
import LayoutContainer from '../components/LayoutContainer';
import Forecast from './cards';

function page() {
  return (
    <LayoutContainer>
      <Forecast />
      <hr className="border-gray-600 mb-20 mt-24" />
      <EarningsRevenueTable />
    </LayoutContainer>
  );
}

export default page;
