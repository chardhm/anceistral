import React, { useState } from 'react';
import DATA from '../DATA';
import ReactCardFlip from 'react-card-flip';


const Card = ({product}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" containerClassName="col-md-3 mb-4 my-4 py-4" >
            
                <div className="card h-100 text-center p-4">
                    <img src={product.image} className="card-img-top" alt={product.title} />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{product.title.substring(0,20)}</h5>
                            <p className="card-text lead fw-bold">$ {product.price}</p>
                            {/* <p className="card-text lead fw-bold">{product.category}</p> */}
                            
                              <button className="btn btn-outline-dark" onClick={() => setIsFlipped((prev) => !prev)} >Ver detalles...</button>
                            
                        </div>
                </div>
            

            
                <div className="card h-100 text-center p-4">
                   <img src={product.image} className="card-img-top" alt={product.title} />
                    <p className="card-text">{product.description}</p>
                            
                    <button className="btn btn-outline-dark" onClick={() => setIsFlipped((prev) => !prev)} >Ver producto...</button>

                </div>
            
        </ReactCardFlip>
    )
}

const Products = () => {

    const [filterType, setFilterType] = useState("");

    const Filters = () => {
    
        return (
            <>
                <div className="buttons d-flex justify-content-center my-3 py-3">
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
            </>
        )
    }

    return (
      <div style={{ margin: "auto", width: "60%", float: "" }} className="Products my-4 py-4">
          <h1 className='py-3 my-3 fw-bold justify-content-center text-center'>Productos Disponibles</h1>

          <Filters />
          
        <div className="row" style={{display: "flex"}}>
          {DATA
          .filter((obj) => obj.category.toLowerCase().includes(filterType))
          .map((item, index) => (
          <Card product={item} key={`card-${index}`} />
          ))}
       </div>

      </div>
    )
}

export default Products