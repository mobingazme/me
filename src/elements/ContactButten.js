import React from 'react';
import { Link } from 'react-scroll';

function ContactButton() {
  return (
    <Link

      to="footer"
      spy={true}
      smooth={true}
      duration={500}
    >
      <button className='bg-gradient-to-l font-bold hover:bg-gradient-to-r shadow-mdshadow-D duration-700   ease-in transition-all  from-[#fecd1a] to-[#ffaf29] w-40 h-14 rounded-xl text-black text-xl hover:text-2xl'>ارتباط با من</button>
    </Link>
  );
}

export default ContactButton;
