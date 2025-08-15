
import LogoLA from '../../assets//logo_LADEV_Logo3.png'
import { Link } from 'react-router-dom';

import'../../globals.css'


function HomeButton() {

    return (
        <div className='fixed top-5 left-5 md:left-10 h-16 w-16 md:w-24 md:h-24 p-2  z-50 flex items-center justify-center   md:flex'>
            <Link to="/" className="w-full h-full flex items-center justify-center">
                <img src={LogoLA} alt="Volver a la página principal" className="w-max h-max object-contain" />
            </Link>
        </div>
    );
}

export {HomeButton}



