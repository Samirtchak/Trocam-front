import React,{useState} from 'react';

import './style/styles.css'



const Signup = () => {
    const [name,setName] = useState('');
    const [email,setMail] = useState('');
    const [password,setPassword] = useState('');
    const [number,setNumber] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8000/user/signup", {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "name": name,
                "email":email,
                "password":password,
                "number":number,
            })
        })

        console.log("user successfully created");
        
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="row">
                <label className="label">Name: {' '}
                </label> 
                <input className="formItem"  type="text" value={name} onChange={e => setName(e.target.value)}/>
                
            </div><br/>

            <div className="row">
                <label className="label"> Email: {' '}</label>
                <input className="formItem" type="email" value={email} onChange={e => setMail(e.target.value)}/>
                
            </div><br/>

            <div className="row">
                <label className="label">Password:{' '}</label>
                <input className="formItem" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div><br/>
            <div className="row">
                <label className="label">Mobile: {''}       </label>
                <input className="formItem" type="tel" value={number} onChange={e => setNumber(e.target.value)}/>
         
            </div><br/>
          </div>   

            <div className="btn"><input className="button" type="submit"  value="Signup"/></div>
        </form>
    )
}



export default Signup;