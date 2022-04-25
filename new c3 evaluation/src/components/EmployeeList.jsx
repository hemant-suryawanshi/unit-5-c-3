import './all.css'

import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"
export const EmployeeList = () => {
  const [employ,setemploy]=useState([])


  useEffect(()=>{
    getdata()
  },[])

  const getdata=async()=>{
    fetch("http://localhost:8080/employee")
    .then((d)=>d.json())
    .then((data)=>{
      setemploy(data)
    })

  }
  return (
    <div className="list_container">
      {employ.map((e)=>(
        <Link to={`/employees/${e.id}`}>
        <div className="employee_card" key={e.id}>
        <img className="employee_image" src={e.image}/>
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
        </Link>

      ))}
      
    </div>
  );
};
