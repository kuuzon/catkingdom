//Import React components
import React, { useState, Fragment } from 'react';

//Import packages
import { Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

//Custom styles for navs
const H2 = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: #D2691E;
`;

const P = styled.p`
    font-size: 1rem;
    color: black;
    padding-bottom: 1rem;
`;

const Contact = () => {

    //Initial states
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    //Set state for alert display
    const [show, setShow] = useState(false);
    const [alertData, setAlertData] = useState({
        variant: 'danger',
        alertMessage: ''
    });

    const { name, email, message } = formData;
    const { variant, alertMessage } = alertData;

    //POST functions
    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await axios.post('/contact', formData);
            console.log(res);

            //Show alert & data
            setShow(true);
            setAlertData({ variant: "success", alertMessage: res.data })

        } catch(error) {
            console.log(error);

            //Show alert & data
            setShow(true);
            setAlertData({ variant: "danger", alertMessage: 'error.data' })
        }
    }

    return (
        <Fragment>
            <H2>Contact Form</H2>
            <P>Please provide your feedback here:</P>
            {/* Alert Display */}
            {
                show === true ?
                (
                    <Alert 
                        className='mt-5'
                        variant = {variant}
                        onClose={() => setShow(false)}
                        dismissible
                    >
                        <Alert.Heading>
                            { variant === 'success' ? ' Success ' : 'Oops! ...Something went wrong!' }
                        </Alert.Heading>
                        <p>
                            {alertMessage}
                        </p>
                    </Alert>
                ) : null
            }

            {/* Form */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        name="name"
                        value={name}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email address"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Message: </Form.Label>
                    <Form.Control
                        type="messagearea"
                        as="textarea"
                        rows="3"
                        placeholder="Enter message here"
                        name="message"
                        value={message}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Fragment>
    )
}

export default Contact
