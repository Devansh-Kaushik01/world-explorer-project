import React from 'react'
import Login from './Login'
import DefaultButton from '../../components/button/DefaultButton'
import DefaultInput from '../../components/input/DefaultInput'
import Checkbox from '../../components/checkbox/Checkbox'
import { useNavigate } from 'react-router-dom'

function Register() {
  const Navigate = useNavigate();
  return (
    <div className='container-fluid d-flex justify-content-center'>
      <div className='container w-75 justify-content-center'>
        <div className='row'>
          <div className='form'>
            <div className='col'>
              <div className='heading text-center '>
                <h1>Benvenuto</h1>
                <p>Non hai ancora un account?<span className='text-danger ms-1;'
                  onClick={() => Navigate("/auth/register")}
                ><u>Registrati adesso</u></span></p>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col'>
                <DefaultInput
                  name={"Name utente"}
                  type={"text"}
                  placeholder={"..."}
                />
              </div>
              <div className='col'>
                <DefaultInput
                  name={"Email"}
                  type={"email"}
                  placeholder={"..."}
                />
              </div>
              <div className='col'>
                <DefaultInput
                  name={"Password"}
                  type={"password"}
                  placeholder={"..."}
                />
              </div>
            </div>
            <div className='row mt-2 p-2 mb-2'>
              <Checkbox />
            </div>
          </div>
          <div className='row mt-4 text-center'>
            <div className='col'>
              <DefaultButton
                name={"REGISTER"}
              />
            </div>
            <div className='col'>
              <DefaultButton
                onClick={() => Navigate("/auth/login")}
                name={"LOGIN"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register