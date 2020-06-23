//Import React
import React, {Fragment, useState } from 'react';

//Import packages
import { Form, Button, Alert } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

//Custom styles 
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

const Styles = styled.div`
    .alert {
        margin-top: 1rem
    }
`;

//Render
const Sms = () => {
    //Set state for form
    const [ formData, setFormData ] = useState({
        name: '',
        message: ''
    });

    //Set state for alert
    const [show, setShow] = useState(false);
    const [alertData, setAlertData] = useState({
        variant: 'danger',
        alertMessage: ''
    });

    const { name, message } = formData;
    const { variant, alertMessage } = alertData;

    //Post data functions
    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(formData);

        try {
            const res = await axios.post('/sms', formData);

            //Show alert
            setShow(true);
            //Set data for the alert
            setAlertData({ variant: "success", alertMessage: res.data })

        } catch(error) {
            console.log(error);
            //Show alert
            setShow(true);
            //Set data for alert
            setAlertData({ variant: "danger", alertMessage: error.data })
        }
    };

    return (
        <Styles>
            <Fragment>
                <H2>SMS Contact</H2>
                <P>Contact us via SMS message below:</P>

                {/* Alert Display */}
                {
                    show === true ? 
                    (
                        <Alert 
                        className='mt-6' 
                        variant={variant} 
                        onClose={() => setShow(false)} dismissible 
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
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Enter your name"
                            name="name"
                            value={name}
                            onChange={e => onChange(e)}
                            />
                    </Form.Group>
                    <Form.Group controlId="message">
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control 
                            type="messagearea"
                            as="textarea"
                            placeholder="Enter your text message"
                            name="message"
                            value={message}
                            onChange={e => onChange(e)}
                            />
                    </Form.Group>
                    <Button variant="dark" type="submit">Submit</Button>
                </Form>
            </Fragment>
        </Styles>
    )
};

export default Sms