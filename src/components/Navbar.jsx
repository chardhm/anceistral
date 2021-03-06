import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm fixed-top" >
                <div className="container">
                  <img src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-olive-oil-healthy-food-and-vegan-justicon-flat-justicon.png" width="26" alt="" />
                    <Link className="navbar-brand fw-bold fs-4" to="/">Aceistral</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Productos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Sobre mi</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                        </ul>
                        <div className="buttons">
                            <Link to="/cart" className="btn btn-outline-dark ms-2">
                                <i className='fa fa-shopping-cart me-1'></i>
                                Cart (0)
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>


    )
}
