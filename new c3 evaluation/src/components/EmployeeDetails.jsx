
import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom"

export const EmployeeDetails = () => {
  const [onedata,setonedata]=useState({})
  // const [task,settask]=useState([])
const {id}=useParams()
useEffect(()=>{
  getdata()
},[])

const getdata=()=>{
  fetch(`http://localhost:8080/employee/${id}`)
    .then((d)=>d.json())
    .then((data)=>{
    setonedata(data)
    // settask(data.task)
    })
}
  return (
    <div className="user_details">
      <img className="user_image" src={onedata.image}/>
      <h4 className="user_name">{onedata.username}</h4>
      <span className="user_salary">${onedata.salary}</span>

      {/* <span className="tasks">
        {onedata.tasks.map((ele)=>(

          <li className="task">{ele}</li>
        ))
        }
        </span> */}
      
      Status: <b className="status">{onedata.status}</b>
      Title: <b className="title">{onedata.title}</b>
      {onedata.status==="working"?<button className="fire">Fire Employee</button>:null}

      {onedata.status==="terminated" || onedata.title==="Team Lead"?null:<button className="promote">promote</button>}
    </div>
  );
};
