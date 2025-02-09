import Ejemplo from '../assets/imagenEjemplo.jpg'

function Proyect () {

    return(
        <div className="shadow-[6px_6px_0px_#c2b2b2] cursor-pointer flex flex-col h-[500px] w-[350px] rounded-xl items-center hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all odd:bg-fuchsia-500 even:bg-indigo-500 ">
            <img src={Ejemplo} alt="pagina de ejemplo" className="h-full w-full bg-white rounded-t-xl"/>
            <div className="flex flex-col h-2/6 gap-2 align-center justify-center">
                <h2 className="font-bold text-xl text-whitesmoke pb-5">Nombre de proyecto</h2>
                <ul className="w-full flex gap-3  justify-center items-center text-center">
                    <li className="w-auto rounded-lg p-1 border-2 border-white  text-whitesmoke text-sm">React.Js</li>
                    <li className="w-auto rounded-lg p-1 border-2 border-white  text-whitesmoke text-sm">Tailwind</li>
                </ul>
            </div>

        </div>
    )
}
export default Proyect