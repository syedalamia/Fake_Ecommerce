import React, { useReducer, useEffect, useState } from "react";

import { Link as RouteLink } from "react-router-dom";
import { Container } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Image, Alert } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import login from "../img/login.PNG";

function Signup() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [error_msg, setMsg] = useState("");

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      user_name: "",
      email: "",
      password: "",
      city: "",
      street: "",
      number: "",
      zipcode: "",
      phone: "",
      lat: "",
      long: "",
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setFormInput({ lat: position.coords.latitude });
      setFormInput({ long: position.coords.longitude });
    });
  }, []);
  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };
  const submitForm = (evt) => {
    evt.preventDefault();
    console.log(formInput);
    axios
      .post("http://127.0.0.1:8080/signup", {
        email: formInput.email,
        username: formInput.user_name,
        password: formInput.password,
        firstname: formInput.firstName,
        lastname: formInput.lastName,
        address: {
          city: formInput.city,
          street: formInput.street,
          number: formInput.number,
          zipcode: formInput.zipcode,
          geolocation: {
            lat: formInput.lat,
            long: formInput.long,
          },
        },
        phone: formInput.phone,
      })
      .then((res) => {
        history.push("/login");
      })
      .catch((e) => {
        console.log(e.response.data);
        setMsg(e.response.data);
        setOpen(true);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Alert
            variant="danger"
            onClose={() => setOpen(false)}
            show={open}
            dismissible
          >
            <p>Email already exists</p>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Image src={login} fluid />
        </Col>
        <Col md={6}>
          <FormContainer>
            <h1 className="mt-5 text-center">Sign In</h1>

            <Form onSubmit={submitForm}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  name="firstName"
                  label="First Name"
                  onChange={handleInput}
                  placeholder="Enter Name"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  label="Last Name"
                  name="lastName"
                  onChange={handleInput}
                  placeholder="Enter Name"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="user_name">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  label="User Name"
                  name="user_name"
                  onChange={handleInput}
                  placeholder="username"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  value={formInput.email}
                  label="Email Address"
                  name="email"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  name="city"
                  label="City"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="street">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  label="Street"
                  name="street"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="zipcode">
                <Form.Label>Zipcode</Form.Label>
                <Form.Control
                  label="Zip Code"
                  name="zipcode"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="number">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  name="number"
                  type="number"
                  label="Number"
                  onChange={handleInput}
                ></Form.Control>
              </Form.Group>

              <Button className="mt-2" type="submit" variant="primary">
                Sign Up
              </Button>
            </Form>

            <Row className="py-3 ">
              <Col>
                <RouteLink to="/login" style={{ color: "black" }}>
                  If you've an account please sign in
                </RouteLink>
              </Col>
            </Row>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
