import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../Signin.css'

function SignUp() {
    const navigate = useNavigate()

    function submit() {
        navigate("/login")
    }
    return (
        <div className='body2'>
            <div className='nav'>
                <img src="/logo/logoimg.png" alt="logo" className='logo1' width="200px" height="112px" />
                <div className='lan'>
                    <select name="" id="">
                        <option value="">English</option>
                        <option value="">Hindi</option>
                    </select>
                    <button>Sign In</button>
                </div>
                <div className='main2'>
                    <div className='div1'>
                        <p className='para4'>
                            Unlimited movies, TV shows and more.
                        </p>
                        <p className='para1'>Watch anywhere. Cancel anytime.</p>
                        <p className='para2'>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className='div2'>
                        <input type="text" name="" id="" placeholder='Email address' className='inpt' />
                        <button className='btn1'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp