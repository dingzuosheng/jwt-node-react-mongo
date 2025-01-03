import React from 'react'
import {Button, Form} from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  return (
    <div className='center-form'>
      <Form>
          <h1>Signup</h1>
          <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
              />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
              />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
              Signup
          </Button>
      </Form>
    </div>
  )
}

export default Signup;
