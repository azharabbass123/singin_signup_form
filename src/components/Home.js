import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import SignImage from './SignImage'

const Home = () => {

    const [inpVal, setInpVal] = useState({
        name: '',
        email: '',
        date: '',
        password: '',
    })
    const previusData = JSON.parse(localStorage.getItem('userData' || '[]')) ;
    const [data, setData] = useState(previusData);
    const getData = (e) => {
        const {value, name} = e.target;

        setInpVal(() => {
            return{
                ...inpVal,
                 [name]: value
            }
            
        })
        console.log(inpVal);

        }
        const storeData = (e) =>{
            const {name, email, date, password } = inpVal;
            e.preventDefault();
            if(name === ""){
                alert("Name is required.")
            }
            else if(email === ""){
                alert("Email is required.")
            }
            else if(!email.includes('@')){
                alert("Please enter a valid email.")
            }
            else if(date === ""){
                alert("Date is required.")
            }
            else if(password === ""){
                alert("Password is requird.")
            }
            else if(password.length < 5){
                alert("Password should not be less than five characters.")
            }
            else{
                alert("Data submitted successfully.")
                localStorage.setItem("userData", JSON.stringify([...data,inpVal]));
            }
            
            
        }

    
  return (
        <>
        <div className='container mt-3'>
            <section className='d-flex justify-content-between'>
                <div className='left-data col-lg-6'>
                    <h3 className='col-lg-8 text-center'>SignIn</h3>
                    <Form>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
        <Form.Control type="text" name='name' onChange={getData} placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
        <Form.Control type="email" name='email' onChange={getData} placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-8" controlId="formBaicDate">
        <Form.Control type="date" name='date' onChange={getData} />
      </Form.Group>

      <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
        <Form.Control type="password" name='password' onChange={getData} placeholder="Password" />
      </Form.Group>
      
      <Button variant="success col-lg-8" onClick={storeData} type="submit">
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already have an acount<span><NavLink to='/SignIn'>SignIn</NavLink></span></p>
</div>
                <SignImage />
        </section>

        </div>
        </>
  )
}

export default Home