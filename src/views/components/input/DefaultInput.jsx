import React from 'react'

function DefaultInput({ name, type, placeholder }) {
    return (
        <div className='container-fluid w-100 m-0'>
            <label>{name}</label>
            <input type={type} class="form-control" placeholder={placeholder} />

            {/* <div class="form-floating mb-3">
                <label for="Input">{name}</label>
                <input type={type} class="form-control" id="floatingInput" placeholder={placeholder}/>
                    <label for="floatingInput">{name}</label>
            </div> */}
        </div>
    )
}

export default DefaultInput