import { useFormik } from 'formik';
import { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap'
import { number } from 'yup';


const initialValues = {
    number : ''
}

const Task3 = () => {
    const [total, setTotal] = useState<any>([0])

    const {values,handleSubmit,handleChange} = useFormik({
        initialValues : initialValues,
        onSubmit : (values,Actions)=>{
            Actions.resetForm()
            setTotal([...total,values.number])           
        }
    })

    const sum = total.reduce((total : any,num : any) => total + num )
    
  return (
    <div>
        <div className='m-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Col} md="4">
                <Form.Control
                    required
                    type="number"
                    name='number'
                    placeholder="Please Enter the number"
                    onChange={handleChange}
                    value={values.number}
                />
                </Form.Group>
                <div className='mt-2'>
                    <Button type='submit'>Submit</Button>
                </div>
            </Form>
        </div>
        <div className='d-flex ms-3'>
            <h3>{sum<=1000 && sum>=0 ? `VALUE IS 👉 ${sum}` :  `Can't add the more values....`}</h3>
        </div>
    </div>
  )
}

export default Task3
