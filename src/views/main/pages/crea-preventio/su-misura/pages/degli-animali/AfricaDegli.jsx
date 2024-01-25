import React from 'react'

import elephant from '../../../../../../images/elephant.jpg'
import { ArrowDownShort, ArrowLeftShort, ArrowUpShort, Plus, Scissors } from 'react-bootstrap-icons'

function AfricaDegli() {
    return (
        <div className='contanier-fluid'>
            <div className='contanier'>
                <div className='row bg-danger pt-2 pb-3 text-white'>
                    <div className='col d-flex'>
                        <ArrowLeftShort />
                        <h4>Indeitro</h4>
                    </div>
                    <div className='col d-flex'>
                        <Scissors />
                        <h3>Preventivi su misura </h3>
                        <button> crea nuovo <Plus /></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='img-section'>
                        {/* <img className='elephant-img' src={elephant} alt='img' /> */}
                        <div className='img-heading'>
                            <h2>AFRICA DEGLI ANIMALI</h2>
                            {/* <img src='' alt='logo' /> */}
                        </div>
                        <div className='dropdowns-heading'>
                            <div>dropdowns</div>
                            <div className='luglio-head d-flex text-white justify-content-center'>
                                <ArrowUpShort />
                                <h2>Luglio 2023</h2>
                                <ArrowDownShort />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfricaDegli