import React, { useState } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedpassword, setConfirmedPassword] = useState('')
    const [redirect, setRedirect] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmedpassword) {
            const newUser = { name, email, password };

            axios.post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
            .then(response => {
                console.log(response);
                setRedirect(true)
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    if (redirect) return <Redirect to="/login" />
  
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} onChange={handleName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={handlePassword} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmedPassword">Confirmed Password</label>
                            <input type="password" name="confirmedPassword" value={confirmedpassword} onChange={handleConfirmedPassword} className="form-control"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;