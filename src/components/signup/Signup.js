import React from 'react'
import Poster from '../poster/Poster'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='body'>
            <div className='left'>
                <Poster />
            </div>
            <div className="right">
                <div className="heading">
                    Create New Account
                </div>

                <div
                    style={{ display: 'flex', gap: '0.625rem', flexDirection: 'column' }}
                >
                    <div className="inputLabel">Username</div>
                    <input type='text' placeholder='Create your username' className='Input' >
                    </input>
                </div>

                <div
                    style={{ display: 'flex', gap: '0.625rem', flexDirection: 'column' }}
                >
                    <div className="inputLabel">Password</div>
                    <input type='text' placeholder='Create your password' className='Input'  />
                </div>

                <div
                    style={{ display: 'flex', gap: '0.625rem', flexDirection: 'column' }}
                >
                    <div className="inputLabel">Contact Number</div>
                    <input type='number' placeholder='Enter your contact number' className='Input'  />
                </div>

                <Link to="/dashboard">

                    <button type='button' className="signUp-btn" >
                        Sign Up
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Signup