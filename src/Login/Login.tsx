import React, {useState} from 'react'
import './Login.css'
import Avatar from './img_avatar2.png'

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submitHandler(e: { preventDefault: () => void; }){
        e.preventDefault();
    }

    return (
            <form className="loginForm">
                <div className="imgcontainer">
                    <img src={Avatar} alt="Avatar" className="avatar"/>
                </div>

                <label htmlFor="uname"><b>Username</b></label>

                <input type='text' value={username} name='username' placeholder='Enter Username' required
                           onChange={e => setUsername(e.target.value)}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" value={password} name="password" placeholder="Enter Password" required
                                      onChange={e => setPassword(e.target.value)}/>

                <button onSubmit={submitHandler}>Log In</button>

                <span className="psw">Forgot <a href="#">password?</a></span>
            </form>
        )
}

export default Login;