import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import SignImage from './SignImage'


const SignIn = () => {
  const history = useNavigate();
  const [userDetails, setUserDetail] = useState({
    email: "",
    password: "",
  })
  
  const getData = (e) =>{
    const {value, name} = e.target;
    setUserDetail (() => {
      return{
        ...userDetails,
        [name]: value
      }
    })
    //console.log(userDetails);
  }
    const validateDetails = (e) =>{
      e.preventDefault();
      const {email, password} = userDetails;
      const previousData = localStorage.getItem('userData');
      //console.log(previousData);
      if(email === ''){
        alert("Enter your email");
      }
      else if(password ===''){
        alert("Enter your password");
      }
      else{
           if(previousData && previousData.length){
            const userData1 = JSON.parse(previousData)
            const userLogin = userData1.filter((el, k) => {
              return el.email === email && el.password === password
            })
            if(userLogin.length === 0){
              alert("Invalid user details")
            }
            else{
              localStorage.setItem('userLogin', JSON.stringify(userLogin));
                history('/features');
            }
            
            
            
           }
           
      }
    }
  

  return (
    <>
        <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className='left_data col-lg-6'>
                    <h3 className='col-lg-4 text-center'>SignIn</h3>
                    <Form>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
      </Form.Group>
      
      <Button variant="success col-lg-8" type="submit" onClick={validateDetails}>
        Submit
      </Button>
    </Form>

</div>
          <SignImage />
                
        </section>

        </div>
    </>
  )
}

export default SignIn;
