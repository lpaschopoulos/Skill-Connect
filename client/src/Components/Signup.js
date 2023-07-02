import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Signup() {
  var navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function toLogin(){
    navigate ("/login");
  }
  function signup(){
    axios
    .post("http://localhost:3636/user/signup", {email, password})
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
      <div className="Signup">
        <input type = "email" placeholder="email" onChange={(e)=>{setEmail(e.target.value);}}/>
        <input type = "password" placeholder="password" onChange={(e)=>{setPassword(e.target.value);}}/>
        <button onClick = {()=>{signup();}}>Signup</button>
        <p>
          You have an account? {" "}
          <a 
            onClick={()=>{
              toLogin();
              }}
            >Login</a>
            </p>
      </div>
    );
  }
  
  export default Signup;