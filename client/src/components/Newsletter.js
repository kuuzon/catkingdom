//Import React components
import React, { Fragment, useState } from 'react';

//Import packages
import { Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

//Custom styles for tags
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

const Newsletter = () => {
    //Set state for the form
    const [ formData, setFormData ] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    //Set state for alert 
    const [show, setShow] = useState(false);
    const [alertData, setAlertData] = useState({
        variant: 'danger',
        message: ''
    });

    const { firstName, lastName, email } = formData;
    const { variant, message } = alertData;
    
    //Post data functions
    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    })

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(firstName + ' ' + lastName);
        console.log(email);
        
        try{
            const res = await axios.post('/signup', formData);
            console.log(res);

            //Show our alert
            setShow(true);
            //Set the data for the alert
            setAlertData({ variant: "success", message: res.data })
        
        } catch(error) {
            console.log(error);
            //Show our alert
            setShow(true);
            //Set the data for the alert
            setAlertData({ variant: "danger", message: error.response.data })
            //This will link with our server file - and spit out our status for a 400 error
        }
    }

    return (
        <Fragment>
            <H2>Newsletter Signup</H2>
            <P>Signup to our cat-tastic newsletter to keep in the cat-loop:</P>

            {/* Alert Display */}
            {
                show === true ? 
                (
                    <Alert 
                        className='mt-5' 
                        variant={variant} 
                        onClose={() => setShow(false)} dismissible 
                    >
                        <Alert.Heading>
                            { variant === 'success' ? ' Success ' : 'Oops! ...Something went wrong!' }
                        </Alert.Heading>
                        <p>
                            {message}
                        </p>
                    </Alert>
                ) : null
            }
            
            {/* Form */}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={firstName}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        value={lastName}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={e => onChange(e)}
                    />
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </Fragment>
    )
}

export default Newsletter