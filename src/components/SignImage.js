import React from 'react'
import myimg from './sign.svg'

const SignImage = () => {
  return (
    <div className='right_data mt-5' style={{width: '100%'}}>
        <div className='sign_img mt-5 ' >
        <img src={myimg} alt="" style={{maxWidth:480}}></img>
        </div>
    </div>
    
  )
}

export default SignImage