import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const navigate = useNavigate()

    function submit() {
        navigate("/login")
    }
    return (
        <div>
            <h1>
                Sign Up
            </h1>
            <button onClick={submit}>Login</button>
        </div>
    )
}

export default SignUp