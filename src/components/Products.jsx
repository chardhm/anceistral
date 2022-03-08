import React, { useState } from 'react';
import DATA from '../DATA';

const Products = () => {

    const [filterType, setFilterType] = useState("");
    const [loading, setLoading] = useState(false);

    const Loading = () => {
        return (
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    };

    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                  <select
                    className="form-select"
                    value={filterType}
                    onChange={(e) => {
                      setFilterType(e.target.value);
                    }}
                  >
                    <option value="">All</option>
                    <option value="lavanda">Lavanda</option>
                    <option value="girasol">Girasol</option>
                    <option value="mantequilla">Mantequilla</option>
                    <option value="rosas">Rosas</option>
                  </select>
                </div>

                {DATA
                .filter((obj) => obj.category.toLowerCase().includes(filterType))
                .map((product, i) => {
                    return (
                        <>
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center p-4" key={i}>
                                    <img src={product.image} className="card-img-top" alt={product.title} />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0">{product.title.substring(0,20)}</h5>
                                            <p className="card-text lead fw-bold">$ {product.price}</p>
                                            <p className="card-text lead fw-bold">{product.category}</p>
                                            <a href="#" className="btn btn-outline-dark">Seleccionar</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (
        <div>
            <div className="container my-2 py-2">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Últimos Productos</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products