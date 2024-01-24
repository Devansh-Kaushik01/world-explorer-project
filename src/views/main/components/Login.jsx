import React from 'react'
import DefaultInput from '../../components/input/DefaultInput'
import DefaultButton from '../../components/button/DefaultButton'
import Checkbox from '../../components/checkbox/Checkbox'
import { useNavigate } from 'react-router-dom'

function Login() {
    const Navigate = useNavigate();
    return (
        <>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='container w-75 justify-content-center'>
                    <div className='form'>
                        <div className='row'>
                            <div className='col'>
                                <div className='heading text-center'>
                                    <h1>Benvenuto</h1>
                                    <p>Non hai ancora un account?<span className='text-danger ms-1'
                                        onClick={() => Navigate("/auth/register")}
                                    ><u>Registrati adesso</u></span></p>
                                </div>
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
                        <DefaultButton
                            name={"ACCEDI"}
                        />
                    </div>
                </div>
            </div>
        </>

        // <div className='contanier-fluid '>
        //     <div className='contanier'>
        //         <div className='col d-flex justify-content-center '>
        //             <div className='card w-75'>
        //                 <div className='row'>
        //                     <div className='heading'>
        //                         <h2>Benvenuto</h2>
        //                         <p>Non hai ancora un account?<span
        //                             onClick={() => Navigate("/auth/register")}
        //                         ><u>Registrati adesso</u></span></p>
        //                     </div>
        //                 </div>
        //                 <div className='row w-100%'>
        //                     <div className='row'>
        //                         <div className='col'>
        //                             <DefaultInput
        //                                 name={"Name utente"}
        //                                 type={"text"}
        //                                 placeholder={""}
        //                             />
        //                         </div>
        //                         <div className='col'>
        //                             <DefaultInput
        //                                 name={"Password"}
        //                                 type={"password"}
        //                                 placeholder={""}
        //                             />
        //                         </div>
        //                     </div>
        //                     <div className='checkbox'>
        //                         <Checkbox />
        //                     </div>
        //                     <div className=''>
        //                         <DefaultButton />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Login