import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

interface IUser{
  id:number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  dob: string;
}
    
const UserTable = () => {
  const[users,setUsers] = useState<IUser[]>([])
  const location = useLocation();
  const navigate = useNavigate();

  
  useEffect(() => {
     fetchRecord();
  },[])

  const registerPage = () => {

    navigate('/user-register');
  };

  const fetchRecord = () => {
    axios.get('http://localhost:3000/user/').then((val)=>{
      // console.log(val.data.user)
      setUsers(val.data.user)
    }).catch((e)=>{
      console.log(e)
    });
  }

  const handleDelete = (id:number) => {
    axios.delete(`http://localhost:3000/user/${id}`).then(()=>{
      alert("Delete Successfully")
      fetchRecord()
    }).catch((e)=>{
      console.log(e);
    })
  }

  const handleEdit = (id:number) => {
    navigate(`/user-register/${id}`)
  }


  return (
    <div className="container">
      <div className='d-grid mt-5'><Button className="btn btn-primary" size="lg" onClick={registerPage}>Click the Register</Button></div>
      <div className="mt-5">
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user:IUser,index:number)=>{                  
              return(
                <tr key={`TableData_${index}`}>
                  <td>{index + 1}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td>{user.dob}</td>
                  <td>
                    {/* <Link to={"/edit"}> */}
                    <Button onClick={()=>handleEdit(user.id)}>Edit</Button>
                  {/* </Link> */}
                  &nbsp;
                  <Button className="bg-danger" onClick={()=>confirm("Are you sure delete ?")? handleDelete(user.id) : ''}>Delete</Button></td>
                </tr>
              )
            })}
        </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UserTable;

