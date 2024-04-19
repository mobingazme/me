import ContactButton from '@/elements/ContactButten';
import Image from 'next/image';
import { Link } from 'react-scroll';
import 'animate.css';

function Header() {
    return (
        <div className='bg-A w-full h-full flex justify-between items-center p-8 '>
            <Image className='animate__animated animate__fadeInRight animate__delay-2s' width={150} height={100} alt='logo' src='/images/logo-header.svg' />
            <div className='flex animate__animated animate__fadeInUp animate__delay-2s'>
                <Link activeClass="active" to="abute" spy={true} smooth={true} offset={-70} duration={500}>
                    <h4 className=' text-lg hover:text-xl font-bold text-C duration-700 ease-in transition-all transform  hover:translate-y-[-4px] hover:text-D   cursor-pointer'>درباره من</h4>
                </Link>
                <Link activeClass="active" to="workSamples" spy={true} smooth={true} offset={-70} duration={500}>
                    <h4 className=' text-lg hover:text-xl font-bold text-C duration-700 ease-in transition-all transform hover:translate-y-[-4px] mx-7 hover:text-D   cursor-pointer'>نمونه کار ها</h4>
                </Link>

                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                    <h4 className=' text-lg hover:text-xl font-bold text-C duration-700 ease-in transition-all hover:translate-y-[-4px] transform   hover:text-D   cursor-pointer'>مهارت هایه من</h4>
                </Link>
            </div>
            <div className='animate__animated animate__fadeInLeft animate__delay-2s'>
                <ContactButton />
            </div>
        </div>
    )
}

export default Header

