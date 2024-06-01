import React from 'react'
import Poster from '../poster/Poster'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-body'>
            <div className='login-left'>
                <Poster />
            </div>
            <div className="login-right">
                <div
                    style={{ display: 'flex', gap: 10, flexDirection: 'column' }}
                >
                    <div className="inputLabel">Username</div>
                    <input type='text' placeholder='Enter your username' className='Input'>
                    </input>
                </div>

                <div
                    style={{ display: 'flex', gap: 10, flexDirection: 'column' }}
                >
                    <div className="inputLabel">Password</div>
                    <input type='text' placeholder='Enter your password' className='Input' />
                </div>
                <div className="checkboxContainer">
                    <div style={{ display: 'flex', gap: 10, float: 'left', cursor: 'pointer' }}>
                        <input type="checkbox" className='checkInput' />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <div style={{ color: 'red' }}>Forgot your password?</div>
                </div>
                <Link to="/dashboard">

                    <button className="login-btn">Login</button>
                </Link>

                <div>
                    <text style={{ fontSize: '18px' }}> Don’t have an account?</text>
                    <span style={{cursor: 'pointer',marginLeft: '10px',fontSize: '19px'}}>
                        <Link to="/signup">Create Account</Link>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Login