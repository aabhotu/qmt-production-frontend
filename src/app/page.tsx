import ForePage from '@/components/ForePage';
import ProductList from '@/components/landing-page/ProductList';
import WhyChooseVikko from '@/components/landing-page/WhyChoose';

const HomePage: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col">
      <ForePage />

      <div className="flex flex-col items-center max-w-[1280px] mx-auto px-4 md:px-8 gap-y-12">
        <ProductList />
      </div>
      <WhyChooseVikko />
    </div>
  );
};

export default HomePage;
