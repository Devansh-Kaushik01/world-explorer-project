import React from 'react'
import { Calendar3 } from 'react-bootstrap-icons'
import img1 from '../../../images/africanimg.png'
import img2 from '../../../images/worldimg.png'
import forest from '../../../images/forest.jpg'
import ocean from '../../../images/ocean.jpg'
import africaDel from '../../../images/africa-del.jpg'
import australiaOcean from '../../../images/austrliaOcean.jpg'
import asiaTemple from '../../../images/asiaTemple.jpg'
import europa from '../../../images/europa.jpg'

function Catalogo() {
  return (
    <div className='container-fluid'>
      <div className='container p-0'>
        <div className='row bg-danger text-white'>
          <div className='heading text-center p-1'>
            <Calendar3 />
            <h3>Catalogo</h3>
          </div>
        </div>
        <div className='w-100'>
        <div className='row mb-3 mt-4 w-75 text-center'>
          <div className='col text-center'>
            <div className='africanimg'>
              <img src={img1} alt='africanimg' className='img1' />
            </div>
          </div>
          <div className='col text-center'>
            <div className='worldimg'>
              <img src={img2} alt='worldimg' className='img2' />
            </div>
          </div>
        </div>
        <div className='row w-75 mt-4 mb-4 text-center '>
          <div className='col mb-3'>
            <div className='image-box'>
              <img className='forest-image' src={forest} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>AFRICA DEGLI ANIMALI</h5>
              </div>
            </div>
            <div className='image-box mt-3'>
              <img className='forest-image' src={africaDel} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>AFRICA DEL SUD</h5>
              </div>
            </div>
            <div className='image-box mt-3'>
              <img className='forest-image' src={forest} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>AFRICA DEGLI UOMINI</h5>
              </div>
            </div>
            <div className='image-box mt-3 mb-3'>
              <img className='forest-image' src={ocean} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>OCEANO INDIANO</h5>
              </div>
            </div>
          </div>
          <div className='col mb-3'>
            <div className='image-box'>
              <img className='forest-image' src={asiaTemple} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>ASIA</h5>
              </div>
            </div>
            <div className='image-box mt-3'>
              <img className='forest-image' src={forest} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>NORD E SUD AMERICA</h5>
              </div>
            </div>
            <div className='image-box mt-3'>
              <img className='forest-image' src={australiaOcean} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>AUSTRALIA E OCEANIA</h5>
              </div>
            </div>
            <div className='image-box mt-3'>
              <img className='forest-image' src={europa} alt='image' />
              <div className='img-text'>
                <h5 className='p-3'>EUROPA</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo