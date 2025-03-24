
import LogoLA from '../assets/logo_LADEV.png'
import { Link } from 'react-router-dom';
function HomeButton() {
    return (
        <div className='fixed top-5 left-5 w-20 h-20 p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full z-50 flex items-center justify-center'>
            <Link to="/" className="w-full h-full flex items-center justify-center">
                <img src={LogoLA} alt="Volver a la página principal" className="w-max h-max object-contain" />
            </Link>
        </div>
    );
}

export default HomeButton
/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 */