import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function DefaultButton({name}) {
  return (
    <div className="button">
    <Button variant="danger" size="lg" className='w-50 text-center mb-5'>
      {name}
    </Button>
    {/* button */}
  </div>
  )
}

export default DefaultButton