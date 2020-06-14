//Import React components
import React, {useState} from 'react';

//Import packages
import styled from 'styled-components';
import axios from 'axios';
import {Button} from 'react-bootstrap';

const Styles = styled.div`
    background-color: #F9BE8B;
    color: black;
    font-size: 2rem;
    padding: 2rem;
    margin: 1rem;
    text-align: center;

    .servermessage {
        padding-top: 1rem;
    }
`

const Status = () => {
    //Initial state
    const [serverStatus, setServerStatus] = useState({
        message: ''
    });
    
    //GET (Read) function
    const getServerStatus = async () => {
        try{
            const res = await axios.get('/status');
            setServerStatus({ message: res.data });
        } catch(error) {
            if(error.response.status === 500)
            {
                setServerStatus({ message: 'The server is not running...'});
            } else {
                setServerStatus({ message: 'Unexpected error'});
            }
        }
    }

    return (
        <Styles>
            <div>
                <Button variant="dark" onClick={() => getServerStatus()}>Check Server status</Button>
                <div className="servermessage">
                    { serverStatus.message }
                </div>
            </div>
        </Styles>
    )
}

export default Status
