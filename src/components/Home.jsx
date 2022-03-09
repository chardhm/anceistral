import React from 'react'

const Home = () => {
    return (
        <div className='hero mt-4 py-4'>
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Backgrond" height="700px" />
                    <div className="card-img-overlay d-flex flex-column">
                        <div className="container">
                           <h5 className="card-title display-3 fw-bolder mb-0">ACEITES MÁGICOS ARTESANALES</h5>
                           <p className="card-text lead fs-2">
                               CHECA TODOS NUESTROS PRODUCTOS
                           </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home