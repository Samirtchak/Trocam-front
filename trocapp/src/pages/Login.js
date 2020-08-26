import React,{useState} from 'react';
import './style/styles.css'


const Login = () => {
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
       const response =  await fetch('http://localhost:8000/user/login', {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify( {
              "email":email,
              "password":password
            })
        })
        console.log(response.json())
    }
    return (
        <form onSubmit={handleSubmit}>
           <div className="form">
            <div className="row">
                <label className="label">E-mail:</label>
                <input className="formItem" type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div> <br/>

            <div className="row">
                <label className="label">Password:</label>
                <input className="formItem" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div><br/>
            </div> 
            <div className="btn"><input className="button" type="submit" value="Login"/></div>
        </form>
    )
}

export default Login;