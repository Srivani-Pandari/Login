import React,{useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Signup.css";


import amazon from '../Images/logo.jpeg';
import tree from '../Images/tree.png';
import google from '../Images/google.png';
import facebook from '../Images/facebook.png';
// import backtree from '../Images/backtree.png';
// import icon from '../Images/minus.svg';


const Signup =()=>{
    const [action,setAction]=useState("Login");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    // const [emailError,setEmailError]=useState("");

    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    const message=()=>{
        if (email===""||password===""){
            setError(true);
            toast.error("Please fill out all fields");
        }

        else if ((!emailRegex.test(email) && (!passwordRegex.test(password)))){
            setError(true);
            toast.error("Please provide valid inputs");
        }

        else if(!emailRegex.test(email)){
            setError(true);
            toast.error("Please provide valid email")
        }
        
        else if(!passwordRegex.test(password)){
            setError(true);
            toast.error("please provide valid password")
        }

        
        else{
            setError(false);
            // setEmailError("")
            toast.success("Login Successfull!!",{
                 position: "top-center",
                 theme:"light"
            });
           
            setEmail("");
            setPassword("");
        }
        
    };


    

    return(
        <>
        <div className="body">
        
        <div className="background">
        
            <div className="container">
                <div className="heading">                                     
                    <img src={amazon}alt="image" className="amazon"/>
                    <div className="underline-shade"/>
                </div>
            
                <div className="login">{action}</div>
                <div className="tree">
                    <img src={tree} alt="image" />

                </div>          
                <div className="inputs">

                
            
                    <input type="email" placeholder="Email" value={email} 
                         onChange={(e)=>setEmail(e.target.value)} className="input1"
                        
                        />
                       
                        {/* {
                        
                             emailError && !emailRegex.test(email)&&(
                                <div className="error">
                                    <span className="icon"><img src={icon} alt="icon"/>{emailError}</span>
                                </div>
                                 

                             )
                        }
                     */}

                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input2"/>
                    {/* {
                        error  && password==="" &&(
                            <div className="error">
                                <span className="icon"><img src={icon} alt="icon"/>The password field is required</span>
                            </div>
                        )
                    } */}

                    
                </div>      

                <div className="Signin"  onClick={message}><span className="Signin-text">Sign In</span></div>
                <ToastContainer/>
                <div className="options">
                    <div className="Forgot-Password">Forgot Password?</div>
                    <div className="New-User">New User? Sign Up</div>
                </div>
                <div className="or">or</div>
                    <div className="accounts">
                        <div className="account-button">
                            <img src={google} alt="Google Logo" className="google-logo"/>
                            <div className="info">CONTINUE WITH GOOGLE</div>
                        </div>
                        

                        <div className="account-button">
                            <img src={facebook} alt="Facebook Logo" className="facebook-logo"/>
                            <div className="info">CONTINUE WITH FACEBOOK</div>
                        </div>

                </div>
            </div>
            </div>
            </div>
            
        </>
    );
};

export default Signup;