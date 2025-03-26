import Projects from './Projects'
import'.././globals.css'

function ProyectsContainer() {
    
    return(
        <div className="flex justify-center items-center p-2 
        md:w-4/5">
            <Projects isPink={true}/>
        </div>
    )
}
export default ProyectsContainer