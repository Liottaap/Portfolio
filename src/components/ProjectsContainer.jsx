import Projects from './Projects'
import'.././globals.css'

import { projectsArray } from './projectsArray';

function ProyectsContainer() {

    return(
            <Projects isPink={true} projects={projectsArray}/>

    )
}
export default ProyectsContainer