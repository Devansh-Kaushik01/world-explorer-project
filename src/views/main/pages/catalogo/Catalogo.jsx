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
      <div className='row bg-danger text-white'>
        <div className='heading text-center p-1'>
          <Calendar3 />
          <h3>Catalogo</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='row'>
            <div className='africanimg'>
            <img src={img1} alt='africanimg'  />
            </div>
          </div>
          <div className='row'>
            Boxes
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            Image
          </div>
          <div className='row'>
            Boxes
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalogo