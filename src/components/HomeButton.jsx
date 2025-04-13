
import LogoLA from '../assets//logo_LADEV_Logo3.png'
import { Link } from 'react-router-dom';

import'.././globals.css'


function HomeButton() {

    return (
        <div className='w-24 h-24 p-2  z-50 flex items-center justify-center fixed 
            top-[19%] 
            md:top-[16%] md:left-[2%] 
            lg:left-[6%] lg:top-[12%]
            xl:top-[12%] xl:left-[8%]'>
            <Link to="/" className="w-full h-full flex items-center justify-center">
                <img src={LogoLA} alt="Volver a la página principal" className="w-max h-max object-contain" />
            </Link>
        </div>
    );
}

export {HomeButton}



