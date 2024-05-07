
import Lottie from 'lottie-react';
import animationData from '/public/animations/AnimationProgramer1.json'; // مسیر فایل JSON

const SvgDeveloper = () => {
  return (
    <div className='  p-1 md:p-5 md:w-[600px] '>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgDeveloper