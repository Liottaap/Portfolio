import Proyect from "./Proyect";


function ProyectsContainer() {

    return(
        <main className=" flex flex-wrap gap-10 justify-center items-center mb-0 pb-0 ">
            <Proyect isPink={true}/>
            <Proyect isPink={false}/>
            <Proyect isPink={true}/>
            <Proyect isPink={false}/>
            <Proyect isPink={true}/>
            <Proyect isPink={false}/>

        </main>
    )
}
export default ProyectsContainer