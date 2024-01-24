import React from 'react'
import { Form } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Checkbox() {
  return (
    //   <Form>
    //   {['checkbox'].map((type) => (
    //     <div key={`default-${type}`} className="">
    //       <Form.Check // prettier-ignore
    //         type={type}
    //         id={`default-${type}`}
    //         label={`default ${type}`}
    //       />
    //     </div>
    //   ))}
    // </Form>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" for="flexCheckDefault">
              Ricordami
            </label>
          </div>
        </div>
      </div>
    </div>

  )


}

export default Checkbox