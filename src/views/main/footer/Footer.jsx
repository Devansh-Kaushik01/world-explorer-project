import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import footerlogo from '../../images/footerlogo.png'
 
function Footer() {
  return (
    <>
      <CardGroup>
        <Card className='border-0' style={{ backgroundColor: "rgb(122 122 142)", color: "white" }}>
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Text>
          <div className='footorlogo'>
            <img src={footerlogo} alt='footerlogo' />
          </div>
          </Card.Text>
        </Card>
        <Card className='border-0' style={{ backgroundColor: "rgb(122 122 142)", color: "white" }}>
          <Card.Body>
            <Card.Text className='d-flex justify-content-end'>
              Powered by:<span className='text-warning'><u>World Explorer s.r.l.u</u></span>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      {/* <div className='container-fluid'>
        <div className='card'>
          <div className='container'>
            <div className='row'>
              <div className='col'>
                <div className='row'>
                  <div className='col'>
                    logo-1
                  </div>
                  <div className='col'>
                    logo-2
                  </div>
                </div>
              </div>
              <div className='col'>
                <p>Powered by:<span>World Explorer s.r.lu.</span></p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Footer