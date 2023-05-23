import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
//import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

import axios from "axios";

const AddUser = () => {
  const [data, setData] = useState({
    id:"",
    name:"",
    username:"",
    email: ""
    
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: Date.now(),
      name: data.name,
      username: data.username,
      email:data.email
    };
    axios.post("https://jsonplaceholder.typicode.com/users", userData).then((response) => {
      console.log(response.status,response);
    });
  };

  return (
    // <div>
    //   <h1>Add User</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">
    //       Name
    //       <input
    //         type="text"
    //         name="name"
    //         value={data.name}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="username">
    //       Username
    //       <input
    //         type="text"
    //         name="username"
    //         value={data.username}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="email">
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         value={data.email}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <button type="submit">Save</button>
    //   </form>
    // </div>
    <Form  onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="username"
            placeholder="User Name"
            value={data.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleChange}
          />
        </Form.Group>
        
        
      </Row>
      
      <Button type="submit">Submit form</Button>
    </Form>
  );
};
export default AddUser;