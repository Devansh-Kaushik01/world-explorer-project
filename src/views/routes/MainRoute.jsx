import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../main/header/Header'
import Footer from '../main/footer/Footer'

function MainRoute() {
    return (
        <>
           
                <div className='conatiner'>
                    <div className='row '>
                        <div className='col'>
                            <Header />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Outlet />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Footer />
                        </div>
                    </div>
                </div>
           
        </>
    )
}

export default MainRoute