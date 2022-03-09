import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DATA from '../DATA';


const Product = () => {

    const [product, setProduct] = useState([]);
    //const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData(DATA);
    });

    async function getData() {
        try {
            const productTemp = await fetch(`http://localhost:3000/products/${product.id}`);
            setProduct(productTemp.data());
        } catch (error) {
            console.log(error);
        }
    }

/*     useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:3000/products/${product.id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);*/

/*     const Loading = () => {
        return (
            <>
              Loading...
            </>
        )
    }

    const ShowProduct = () => {
        <>
          <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
        </>
    } */

  return (
    <div>

          <div className="col-md-6">
              <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>

{/*         <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div> */}
    </div>
  )
}

export default Product