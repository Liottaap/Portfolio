import'../globals.css'


function AboutSkills(){

    return(
        <section className=' snap-section bg-whitebg relative flex flex-col  content-center justify-center gap-10 
        lg:flex-none lg:grid lg:grid-cols-2 lg-grid-rows-2'>
            <article className='p-20 pt-10 gap-10 flex flex-col text-left'>
                <h2 className='text-6xl  '>FRONTEND</h2>
                <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, tenetur hic corporis, distinctio eos repellat architecto voluptate blanditiis reiciendis ratione earum voluptates nisi ad nobis eveniet recusandae iure repellendus expedita!</p>
            </article >
            <article className='row-start-2 col-start-2 p-20 pt-10 gap-10 flex flex-col text-right'>
                <h2 className='text-6xl'>UX / UI designer</h2>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolorum expedita similique, voluptates necessitatibus natus id ea incidunt excepturi repudiandae optio, quos dolores rerum vitae deserunt perferendis exercitationem possimus asperiores.</p>
            </article>
        </section>
    )
}

export {AboutSkills}