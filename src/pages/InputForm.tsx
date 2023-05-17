import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import { register } from '../schemas'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from 'react';


const InputForm = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    
    const handleGetUser = async () => {
            const res = await axios.get(`http://localhost:3000/user/${id}`).then((data : any)=>{
                return data;
            }).catch((e:any)=>{
                alert(e)
                
            })
            formik.setValues({"firstname":res.data.user.firstname,"lastname":res.data.user.lastname, "email": res.data.user.email, "address": res.data.user.address, "dob": res.data.user.dob});
    }    

    useEffect(() => {        
        if(id){
            handleGetUser()
        }
    }, [id])
    

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname:'',
            email: '',
            address: '',
            dob: ''
        },
        validationSchema : register, 
        onSubmit : (values)=>{
            console.log("VALUUES IN =>", values);

            if(id){
                axios.put(`http://localhost:3000/user/edit/${id}`, values).then(()=>{
                    navigate('/user-table')
                }).catch((e)=>{
                    alert(e)
                })    
            }else{ 
                axios.post('http://localhost:3000/user/new', values).then(()=>{
                    navigate('/user-table')
                }).catch((e)=>{
                        alert(e);
                })
            }
        }
    })

    
    console.log("After Updae =>", formik);
    
  return (
    <div>
      <div className='p-4'>
        <h3 className='mb-2 text-primary'><u>CRUD OPERATION</u></h3>
        <Form onSubmit={formik.handleSubmit}>

            {/* ---------------------- First Name --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="First name"
                    name='firstname'
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    
                />
                <p className='text-danger'>{formik.errors.firstname}</p>
            </Form.Group>

            {/* ---------------------- Last Name --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Last name"
                    name='lastname'
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    
                />
                <p className='text-danger'>{formik.errors.lastname}</p>
            </Form.Group>

            {/* ---------------------- Email --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="email" 
                placeholder="Enter email" 
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                
            />
            <p className='text-danger'>{formik.errors.email}</p>
            </Form.Group>

            {/* ---------------------- Address --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    placeholder="1234 Main St.." 
                    name='address'
                    value={formik.values.address}
                    onChange={formik.handleChange}
                        
                />
                <p className='text-danger'>{formik.errors.address}</p>
            </Form.Group>

            {/* ---------------------- DOB --------------------------*/}

            <Form.Group className="mb-3" as={Col} md="2">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control 
                    type='date'
                    name='dob'
                    value={formik.values.dob}
                    onChange={formik.handleChange}
                    
                />
                <p className='text-danger'>{formik.errors.dob}</p>
            </Form.Group>

            <Button disabled={false}  variant="primary" type="submit">
                {id ? "Update" : "Submit" }
            </Button>
        </Form>
      </div>
    </div>
  )
}

export default InputForm
