import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../login.css"

function LoginPage() {
    const navigate = useNavigate()

    return (
        <div className='body1'>
            <div className='main'>
                <img src="/logo/logoimg.png" alt="logo" className='logo' width="200px" height="112px" />
                <div className='inner'>
                    <div className='inner1'>
                        <p className='h1'>Sign In</p>
                        <input type="text" placeholder='Email or phone number' className='inp' name='email' />
                        <br /><br />
                        <input type="text" placeholder='Password' className='inp' name='pass' />
                    </div>
                    <div className='inner2'>
                        <button className='btn'>Sign In</button>
                    </div>
                    <div className='inner3'>
                        <input type="checkbox" id="" name="rem" className='checkbox' />
                        <label for="rem" className='rem'> Rememeber me  </label>
                        <a href="" className='need'>Need help?</a>
                    </div>
                    <div className='inner4'>
                        <p className='para'>New to Netflix?<a href="" className='link1'>Sign up now</a></p>
                        <p className='para paraa'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="" className='link2'>Learn more.</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage