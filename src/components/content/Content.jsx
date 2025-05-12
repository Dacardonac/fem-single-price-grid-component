import HeaderSection from '../headerSection/HeaderSection';
import PricingSection from '../pricingSection/PricingSection';
import WhyUsSection from '../whySection/WhyUsSection';
import './Content.scss'

const Content = () => {
  return (
    <article className='content'>
      <HeaderSection />
      <PricingSection />
      <WhyUsSection />
    </article>
  );
}

export default Content;