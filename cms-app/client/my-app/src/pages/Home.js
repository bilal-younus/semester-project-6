import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import '../App.css'
export const Home = () => {
    const [users, setUsers] = useState([])
    const fetchUsers = () => {
        axios.get("http://localhost:3000/users").then(res=>{
            setUsers(res.data.data)
            console.log(res.data.data)
        })
    }

    useEffect(()=> {
        fetchUsers()
    }, [])

    async function deleteUser(e, id) {
        e.preventDefault()
        await axios.delete("http://localhost:3000/users/"+id).then(res => {
            if (res.status === 200) {
                if (users) {
                    setUsers((prev) => {
                        return prev.filter(usr => usr.id !== id)
                    })
                }
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response)
            }
        })
    }

    return (
        <>
            <div className="container body mt-4">
                <h5>All Users of CMS Application</h5>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>CMS ID</th>
                        <th>Username</th>
                        <th>Father Name</th>
                        <th>Department Name</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=> {
                                return <tr key={user.id}>
                                    <td>{user.cmsid}</td>
                                    <td>{user.username}</td>
                                    <td>{user.fathername}</td>
                                    <td>{user.departmentname}</td>
                                    <td>{user.contactnumber}</td>
                                    <td>
                                        <button className={"btn btn-outline-primary"}>Update</button>
                                        <button onClick={(e, id) => deleteUser(e, user.id)}
                                                style={{color: '#F58282', cursor: 'pointer'}} className={"btn btn-outline-danger ms-2"}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>

            </div>
        </>
    )
}