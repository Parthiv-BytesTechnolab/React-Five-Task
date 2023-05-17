import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { register } from '../schemas'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";

const initialValues = {
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    address : "",
    dob : "",
    skill : "",
}

const Edit = () => {    
    const navigate = useNavigate()
    const location = useLocation()    

    const {errors,handleSubmit,handleChange} = useFormik({
        initialValues: initialValues,
        onSubmit : (values,id)=>{
            console.log(location.state.id);
                        
            axios.put(`http://localhost:3000/user/edit/${id}`,values).then(()=>{
                console.log("Update=> ");
                navigate('/user-table',{state: values})
            }).catch((e)=>{
                console.log(e);
                
            })

            console.log(values.firstname);   
        }
    })
  return (
    <div>
      <div className='p-4'>
        <h3 className='mb-2 text-primary'><u>Edit Data</u></h3>
        <Form onSubmit={handleSubmit}>

            {/* ---------------------- First Name --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First name"
                    name='firstname'
                    value={location.state.firstname}
                    onChange={handleChange}                    
                />
                {/* <p className='text-danger'>{errors.firstname}</p> */}
            </Form.Group>

            {/* ---------------------- Last Name --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last name"
                    name='lastname'
                    value={location.state.lastname}
                    onChange={handleChange}
                />
                {/* <p className='text-danger'>{errors.lastname}</p> */}
            </Form.Group>

            {/* ---------------------- Email --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name='email'
                value={location.state.email}
                onChange={handleChange}
            />
            {/* <p className='text-danger'>{errors.email}</p> */}
            </Form.Group>

            {/* ---------------------- Password --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                placeholder="Password" 
                name='password'
                value={location.state.password}
                onChange={handleChange}
            />
            {/* <p className='text-danger'>{errors.password}</p> */}
            </Form.Group>

            {/* ---------------------- Address --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    placeholder="1234 Main St.." 
                    name='address'
                    value={location.state.address}
                    onChange={handleChange}
                />
                {/* <p className='text-danger'>{errors.address}</p> */}
            </Form.Group>

            {/* ---------------------- DOB --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control 
                    type='date'
                    name='dob'
                    value={location.state.dob}
                    onChange={handleChange}
                />
                {/* <p className='text-danger'>{errors.dob}</p> */}
            </Form.Group>

            {/* ---------------------- Skills --------------------------*/}

            <Form.Group className="mb-3 d-flex flex-column" as={Col} md='2'>
                <Form.Label>Skills :</Form.Label>
                <Form.Check 
                    inline
                    type='checkbox'
                    label='HTML'
                    name='skill'
                    value={location.state.skill}
                    onChange={handleChange}
                />
                <Form.Check 
                    inline
                    type='checkbox'
                    label="CSS"
                    name='skill'
                    value={location.state.skill}
                    onChange={handleChange}
                />
                <Form.Check
                    inline 
                    type='checkbox'
                    label="JavaScript"
                    name='skill'
                    value={location.state.skill}
                    onChange={handleChange}
                />
                {/* <p className='text-danger'>{errors.skill}</p> */}
            </Form.Group>

            <Button  variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default Edit