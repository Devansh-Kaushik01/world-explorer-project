import React from 'react'
import { Bag } from 'react-bootstrap-icons'
import img1 from '../../../../images/africanimg.png'
import img2 from '../../../../images/worldimg.png'

function Dacatalogo() {
  return (
    <div className='container-fluid'>
    <div className='container p-0'>
      <div className='row bg-danger text-white'>
        <div className='heading text-center w-100 p-1'>
          <Bag />
          <h3>Da catalogo</h3>
        </div>
      </div>
      <div className='row mb-3 mt-4'>
        <div className='col text-center'>
          <div className='africanimg'>
            <img src={img1} alt='africanimg' className='img1' />
          </div>
        </div>
        <div className='col text-center'>
          <div className='worldimg'>
            <img src={img2} alt='worldimg'className='img2' />
          </div>
        </div>
      </div>
      <div className='row mt-4 mb-4'>
        <div className='col mb-4'>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>AFRICA DEGLI ANIMALI</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>AFRICA DEL SUD</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>AFRICA DEGLI UOMINI</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>OCEANO INDIANO</h5>
          </div>
        </div>
        <div className='col mb-4'>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>ASIA</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>NORD E SUD AMERICA</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>AUSTRALIA E OCEANIA</h5>
          </div>
          <div className='bg-danger text-white text-center'>
            <h5 className='p-3'>EUROPA</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dacatalogo