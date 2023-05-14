import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import  Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Features = () =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    const [loginData, setLoginData] = useState([]);
    var todayDate = new Date().toISOString().slice(0, 10);
    //console.log(todayDate);
    const Birthday = () =>{
        const getUser = localStorage.getItem('userLogin') || '[]';
        if(getUser.length !== 0){
            const user = JSON.parse(getUser);
           setLoginData(user);

           const userBirth = loginData.map((el, k) =>{
            return el.date === todayDate
           });
           if(userBirth){
            setTimeout(() =>{
                handleShow();
            },2000)
           }
        }
        
    }
    const userLogout = () =>{
        localStorage.removeItem('userLogin');
        history('/');
    }
    useEffect(() => {
        Birthday()
    },[])
    return (
        <>{
            loginData.length === 0 ? "Error" :
        
      <><h2>User Details</h2>
      <h3>{loginData[0].name}</h3>
      <Button onClick={userLogout}>Logout</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{loginData[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Many, many happy returns of the day!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      
    }
      </>
    )
}
export default Features