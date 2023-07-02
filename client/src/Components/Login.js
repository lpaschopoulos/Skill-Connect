import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  var navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  function toSignup(){
    navigate ("/signup");
  }
  function login(){
    axios
    .post("http://localhost:3636/user/login", {email, password})
    .then(({data})=>{
      console.log(data);
      if (data.token){
        localStorage.setItem("token", data.token);
        navigate("/profile");
      } else{
        alert(data.msg);
      }
  }); 

  }
    return (
      <div className="Login">
        <input type = "email" placeholder="email" onChange={(e)=>{setEmail(e.target.value);}}/>
        <input type = "password" placeholder="password" onChange={(e)=>{setPassword(e.target.value);}}/>
        <button onClick = {()=>{ login();}}>Login</button>
        <p>
          If you dont have an account {" "}
          <a 
            onClick={()=>{
              toSignup();
              }}
            >Signup</a>
            </p>
      </div>
    );
  }
  
  export default Login;

