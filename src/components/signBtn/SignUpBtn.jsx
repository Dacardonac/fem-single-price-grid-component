import './SignUpBtn.scss'

const SignUpBtn = ({ children }) => {
  return (
    <>
      <button type='button' className='button'>
        {children}
      </button>
    </>
  );
}

export default SignUpBtn;