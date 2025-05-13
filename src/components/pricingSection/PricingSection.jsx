import SignUpBtn from '../signBtn/SignUpBtn';
import './PricingSection.scss'

const PricingSection = () => {
  return (
    <>
      <section className="pricing">
        <h2 className="pricing__title">Monthly Subscription</h2>
        <p className='pricing__price'><span className="pricing__price--strong">$29</span><span className='pricing__price--opacity'>per month</span></p>
        <p className='pricing__paragraph'>Full access for less than $1 a day</p>
        <SignUpBtn>
          Sign Up
        </SignUpBtn>
      </section>
    </>
  );
}

export default PricingSection;