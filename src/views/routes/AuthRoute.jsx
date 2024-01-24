import React from 'react'
// import { Col,Container,Row } from "react-bootstrap"
import img from "../images/img.jpg"
import logo from "../images/logo.png"
import { Outlet } from 'react-router-dom';

function AuthRoute() {
    return (
        <>
            <div className='container-fluidS'>
                <div className='row vh-100 w-100'>
                    <div className='col-4'>
                        <img src={img} alt="image" id='image' />
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='logo d-flex justify-content-center'>
                                <img src={logo} alt="logo" id='logo' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col mt-5 '>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AuthRoute