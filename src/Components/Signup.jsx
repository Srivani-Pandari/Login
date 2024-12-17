import React,{useState} from "react";
import "./Signup.css";

// import backtree from '../Images/backtree.png';
import amazon from '../Images/logo.jpeg';
import tree from '../Images/tree.png';
import google from '../Images/google.png';
import facebook from '../Images/facebook.png';
import backtree from '../Images/backtree.png';
import icon from '../Images/minus.svg';

const Signup =()=>{
    const [action,setAction]=useState("Login");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [error,setError]=useState(false);

    const message=()=>{
        if (email===""||password===""){
            setError(true);
        }else{
            setError(false);
            alert("Welcome!!");
            setEmail("");
            setPassword("");
        }
        
    };

    return(
        <>
        
        <div className="background">
        
            <div className="container">
                <div className="heading">
                    <img src={amazon}alt="image" className="img"/>
                    <div className="underline_shade"/>
                </div>
                <div className="login">{action}</div>
                <div className="tree">
                    <img src={tree} alt="image" />

                </div>          
                <div className="inputs">
            
                    <input type="email" placeholder="Email" value={email} onChange={
                        (e)=>setEmail(e.target.value)} />
                        {
                            error && email==="" &&(
                                <div className="error">
                                    <span className="icon"><img src={icon} alt="icon"/>The email file is required</span>
                                </div>

                            )
                        }
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    
                </div>      

                <div className="Signin"  onClick={message}>Sign In</div>
                <div className="options">
                    <div className="Forgot-Password">Forgot Password?</div>
                    <div className="New-User">New User? Sign Up</div>
                </div>
                <div className="or">or</div>
                    <div className="accounts">
                        <div className="account-button">
                            <img src={google} alt="Google Logo" className="logo"/>
                            <div className="info">CONTINUE WITH GOOGLE</div>
                        </div>
                        

                        <div className="account-button">
                            <img src={facebook} alt="Facebook Logo" className="logo"/>
                            <div className="info">CONTINUE WITH FACEBOOK</div>
                        </div>

                </div>
            </div>
            </div>
            
        </>
    );
};

export default Signup;