import Supermodel from './Supermodel';

const Modellist=({models})=>{
    return (

        <div className='modellist'>
            {!models.length?(<h1>No models working yet</h1>):
            
            
            (
                models.map(model=>(
                    <Supermodel name={model.name} images={models.images?model.images:[]}location={model.location} nationality={model.nationality} height={model.height} key={model.id} id={model.id} />
                ))
            )
            }
        </div>



    )
}

export default Modellist;