import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../login.css"

function LoginPage() {
    const navigate = useNavigate()

    return (
        <div className='inner'>
            <img src="../logo/logoimg.com" alt="logo" />
            <div className='inner1'>
                <h1>Sign In</h1>
                <input type="text" placeholder='Email or phone number' className='inp' /><br /><br />
                <input type="text" placeholder='Password' className='inp' />
            </div>
            <div className='inner2'>
                <button className='btn'>Sign In</button>
            </div>
            <div className='inner3'>
                <input type="checkbox" id="" name="rem" />
                <label for="rem" className='rem'> Rememeber Me  </label>
                <a href="" className='need'>Need help?</a>
            </div>
            <div className='inner4'>
                <p className='para'>New to Netflix?<a href="" className='link1'>Sign up now</a></p>
                <p className='para paraa'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="" className='link2'>Learn more.</a></p>
            </div>
        </div>
    )
}

export default LoginPage