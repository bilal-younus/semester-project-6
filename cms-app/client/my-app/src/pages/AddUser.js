import {Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";

export const AddUser = () => {
    const [userData, setUserData] = useState({
        cmsid: "",
        usernames: "",
        fathername: "",
        departmentname: "",
        contactnumber: ""
    })

    const handleFieldsChange = (event) => {
        let value = event.target.value
        setUserData({...userData, [event.target.name]: value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/users", userData).then(response => {
            if (response.status === 200) {
                setUserData({
                    cmsid: '',
                    usernames: '',
                    fathername: "",
                    departmentname: "",
                    contactnumber: ""
                })
                console.log("Inserted data")
            }
        }).catch(err => {
            if (err.response) {
                console.log(err.response)
            }
        })
    }

    return (
        <>
            <div className="container mt-5 card">
                <h1>Please enter User details and hit save</h1>

                <div className="card-body">
                    <Form>
                        <div className="row">
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>CMS ID</Form.Label>
                                    <Form.Control onChange={(e) => handleFieldsChange(e)} value={userData.cmsid}
                                                  name={"cmsid"} type="text"
                                                  placeholder="XXX-XX-XXXX"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={(e) => handleFieldsChange(e)} value={userData.usernames}
                                                  name={"usernames"} type="text"
                                                  placeholder="Username"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Father Name </Form.Label>
                                    <Form.Control onChange={(e) => handleFieldsChange(e)} value={userData.fathername}
                                                  name={"fathername"} type="text"
                                                  placeholder="Father Name"/>
                                </Form.Group>
                            </div>
                            <div className="col-sm-12 col-lg-6 col-md-12">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Department Name </Form.Label>
                                    <Form.Control onChange={(e) => handleFieldsChange(e)}
                                                  value={userData.departmentname} name={"departmentname"} type="text"
                                                  placeholder="Computer Science"/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Contact Name </Form.Label>
                                    <Form.Control value={userData.contactnumber} onChange={(e) => handleFieldsChange(e)}
                                                  name={"contactnumber"} type="text" placeholder="+9200000000000"/>
                                </Form.Group>
                            </div>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary btn-sm">
                            Add User
                        </button>
                    </Form>
                </div>
            </div>
        </>
    )
}