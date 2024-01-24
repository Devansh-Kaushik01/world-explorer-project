import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Calendar3, Box, Database, Bag, BoxArrowRight } from 'react-bootstrap-icons'
import HeadLogo from "../../images/HeadLogo.png"

function Header() {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <div className='container ms-0'>
          <Navbar.Brand href="/" className='headlogo'>
            <img src={HeadLogo} alt='HeadLogo' className='w-50'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
              <Bag color='white' size={20} className='ms-3 mt-2' />
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Crea preventivo"
                menuVariant="light"
              >
                <NavDropdown.Item href="/su-misura">
                  Su misura
                </NavDropdown.Item>
                <NavDropdown.Item href="/da-catalogo">
                  Da catalogo
                </NavDropdown.Item>
              </NavDropdown>
              <Calendar3 color='white' size={20} className='ms-3 mt-2' />
              <Nav.Link href="/catalogo">Catalogo</Nav.Link>
              <Box color='white' size={20} className='ms-3 mt-2' />
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Allotment"
                menuVariant="light"
              >
                <NavDropdown.Item href="/voli">Voli</NavDropdown.Item>
                <NavDropdown.Item href="/servizi">Servizi a terra</NavDropdown.Item>
              </NavDropdown>
              <Database color='white' size={20} className='ms-3 mt-2' />
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Database"
                menuVariant="light"
              >
                <NavDropdown.Item href="/testi-itinerari">Testi itinerari</NavDropdown.Item>
                <NavDropdown.Item href="/destinazioni">Destinazioni e attivita</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link>OPERATORE</Nav.Link>
              <BoxArrowRight color='white' size={20} className='mt-2' />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
    // <div className='container-fluid w-100'>
    //   <div className='card'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-2'>
    //           <div className='row'>
    //             <div className='col'>
    //               logo-1
    //             </div>
    //             <div className='col'>
    //               logo-2
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-8'>
    //           <div className='row'>
    //             <div className='col'>
    //               <a>icon</a>
    //               <a>Crea preventivo</a>
    //             </div>
    //             <div className='col'>
    //             <a>icon</a>
    //               <a>Catalogo</a>
    //             </div> 
    //             <div className='col'>
    //             <a>icon</a>
    //               <a>Allotment</a>
    //             </div>
    //             <div className='col'>
    //             <a>icon</a>
    //               <a>Database</a>
    //             </div>
    //           </div>
    //         </div>
    //         <div className='col-2'>
    //           <div className='row'>
    //             <div className='col'>
    //               <p><b>OPERATORS</b></p>
    //             </div>
    //             <div className='col'>
    //               icon
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Header