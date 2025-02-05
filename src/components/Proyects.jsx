

function Proyects (name, img, desc ) {


    return(
        <div>
            <h2>{name}</h2>
            <img src={img} alt="Proyecto" />
            <p>{desc}</p>
        </div>
    )
}

export default Proyects