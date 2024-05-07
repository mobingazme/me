
import Lottie from 'lottie-react';
import animationData from '/public/animations/AnimationComp.json'; // مسیر فایل JSON

const SvgDeveloper2 = () => {
  return (
    <div className=' p-1 md:p-0 md:w-[600px]'>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default SvgDeveloper2