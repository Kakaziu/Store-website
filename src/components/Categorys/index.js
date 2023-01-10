import './style.css'

const Categorys = () =>{
    return(
        <section id='categorys'>
            <hr className="line"/>
            <h2 className="sub-title">Categorias</h2>

            <div className='content-categorys'>
                <div className='category category1'>
                    <div className='overlay-cat'>
                        <p>Ação</p>
                    </div>
                </div>
                <div className='category category2'>
                    <div className='overlay-cat'>
                        <p>Esportes</p>
                    </div>
                </div>
                <div className='category category3'>
                    <div className='overlay-cat'>
                        <p>Terror</p>
                    </div>
                </div>
                <div className='category category4'>
                    <div className='overlay-cat'>
                        <p>RPG</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categorys