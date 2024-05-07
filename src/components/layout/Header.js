import ContactButton from '@/elements/ContactButten';
import Image from 'next/image';
import { Link } from 'react-scroll';
import 'animate.css';
import './../module/textGradient.css';
import ButtonResume from '@/elements/ButtonResume';



function Header() {
    return (
        <div  className='bg-A w-full  h-28 md:h-20 flex flex-col md:flex md:flex-row justify-center md:justify-between items-center md:p-8 fixed z-50 shadow-lg '>
            <Image  className='animate__animated animate__fadeInRight animate__delay-2s' width={100} height={80} alt='logo' src='/images/logo-header.svg' />
            <div className='flex animate__animated animate__fadeInUp animate__delay-2s py-3 md:mr-20'>
                <Link activeClass="active" to="abute" spy={true} smooth={true} offset={-70} duration={700}>
                    <h4 className='  hover:text-lg font-bold text-gradient duration-900 ease-in transition-all transform      cursor-pointer'>درباره من</h4>
                </Link>
                <Link activeClass="active" to="workSamples" spy={true} smooth={true} offset={-70} duration={700}>
                    <h4 className=' hover:text-lg font-bold text-gradient duration-600 ease-in transition-all transform  mx-3   cursor-pointer'>نمونه کار ها</h4>
                </Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={700}>
                    <h4 className=' hover:text-lg font-bold text-gradient duration-300 ease-in transition-all  transform      cursor-pointer'>مهارت های من</h4>
                </Link>
            </div>
            <div className='animate__animated animate__fadeInLeft animate__delay-2s hidden md:flex px-2'>
                <ButtonResume />
                <ContactButton />
            </div>
        </div>
    )
}

export default Header

