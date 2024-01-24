import React from 'react'
import img from '../../images/img.jpg'
import { Bag, Calendar3, Scissors } from 'react-bootstrap-icons'

function Home() {
    return (
                <div className='row'>
                    <div className='col'>
                        <div className='image'>
                            <img className='map-image' src={img} alt='image' />
                            <div className='image-text'>
                                <Bag/>
                                <h2>Crea preventivo</h2>
                            </div>
                        </div>

                        <div className='row d-flex justify-content text-center content'>
                            <div className='col'>
                                <div className='text d-flex justify-content-center'>
                                    <h3 className='heading3'>Preventivo da catalogo</h3>
                                </div>
                                <div className='icon mt-4  d-flex justify-content-center'>
                                    <div style={{ width: '18rem', height: "35vh", boxShadow: "0px 0px 17px -4px" }}>
                                        <Calendar3 size={96} className='mt-2' />
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='text d-flex justify-content-center'>
                                    <h3 className='heading3'>Preventivo su misura</h3>
                                </div>
                                <div className='icon mt-4  d-flex justify-content-center '>
                                    <div style={{ width: '18rem', height: "35vh", boxShadow: "0px 0px 17px -4px" }}>
                                        <Scissors size={96} className='mt-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Home