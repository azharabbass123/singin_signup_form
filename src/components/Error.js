import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const history = useNavigate();
    const redirectToHome = () =>{
        history('/');
    }
  return (
    <>
    <h2 className='m-4'>404! Page to found</h2>
    <button className='m-4' onClick={redirectToHome} style={{background: 'blue'}}>Go to login page.</button>
    </>
  )
}

export default Error