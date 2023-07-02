import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";


function Profile() {
  var navigate = useNavigate();
  var [skill, setSkill] = useState("");
  var [skills, setSkills] = useState([]);

  var [user, setUser] = useState({
    _id:"",
    email:"",
  });

  function getMySkills(userId) {
    axios.get("http://localhost:3636/skill/" + userId).then(({data})=>{
      console.log(data);
      setSkills(data);
    });
  }



  useEffect(()=>{
    if (localStorage.getItem("token")){
    axios.post("http://localhost:3636/user/verify" , {token: localStorage.getItem("token")}).then(({data})=>{
      console.log(data);
      if (data._id){
        setUser(data);
        getMySkills(data._id)

      } else {
        navigate("/login")
      }
    });
  } else {
    navigate("/login")
  }
  }, []);

  function create (){
    axios.post("http://localhost:3636/skill/" , {
      title: skill, 
      userId: user._id,
    }).then ((data)=>{
      getMySkills(user._id);
    });
  }

  function disconnect(){
    localStorage.removeItem("token")
    navigate("/")
  }
    return (
      <div className="Profile">
        <h1>{user.email}</h1>
        <button onClick={()=>{
          disconnect();
        }}>Disconnect</button>
        <input type = "skill" placeholder="skill" onChange={(e)=>{setSkill(e.target.value);}}/>
        <button onClick = {()=>{create();}}>Add new skill</button>
        {skills.map((e)=>{
          return <li>{e.title}</li>
        })}
      </div>
    );
  }
  
  export default Profile;