
import Lottie from 'lottie-react';
import animationData from '/public/animations/AnimationProgramer1.json'; // مسیر فایل JSON

const SvgDeveloper = () => {
  return (
    <div className='w-[600px] '>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgDeveloper