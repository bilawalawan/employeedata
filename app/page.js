"use client";

import React, { useState } from "react";
// You have a list of employee objects, each containing properties like name, age, and department.
// Write a program that takes
// this list as input and renders each employee's information in a formatted way.

export default function Employee() {
  // Create array for Employee Data
  const [empData, setempData] = useState([])

  //Get User Name
  const [myName, setMyName] = useState();
  let getName = (e) => {
    setMyName(e.target.value);
    // console.log(myName);
  };

  // Get User Age
  const [myAge, setMyAge] = useState();
  let getAge = (e) => {
    setMyAge(e.target.value);
    // console.log(myAge);
  };

// Get User Department
  const [department, setDepartment] = useState();
  let departmentName = (e) => {
    setDepartment(e.target.value);
    // console.log(department);
  };

 


  let addEmployeeData = () =>{
    let employee = {
      name: myName,
      age: myAge,
    emDepartment: department
    }
    
    // let newData = empData.push(employee)
    setempData([...empData, employee])
    setMyName("");
    setMyAge("");
    setDepartment("");
  }

  // Delete Employee Data from Table
  let deleteData = (key) =>{
    let remainEmp = empData.filter((item, i)=>{
      if (i !== key) {
        return item
      }
    })
    setempData(remainEmp)
  }

  
  return (
    <div>
      <input
        type="text"
        placeholder="enter your name"
        value={myName}
        onChange={getName}
      />
       <br/> <br/>

      <input
        type="text"
        placeholder="enter your Age"
        value={myAge}
        onChange={getAge}
      />
       <br/> <br/>
      <input
        type="text"
        placeholder="enter your age"
        value={department}
        onChange={departmentName}
      />
       <br/> <br/>

       <button onClick={addEmployeeData}>Add Data</button>

       <div>

        <table>
          <tr>
            <th className="tableHeading">Employee Name</th>
            <th className="tableHeading">Employee Age</th>
            <th className="tableHeading">Employee Department</th>
            <th className="tableHeading">Delete</th>
          </tr>
           {
          empData.map((items, i)=>{
            return(
              <tr key={i}>
                <td>{items.name}</td>
                <td >{items.age}</td>
                <td className="changeColor">{items.emDepartment}</td>
                <td><button onClick={()=>deleteData(i)}>Delete</button></td>
              </tr>
            )
          })
        }
        </table>
       
       </div>
    </div>
  );
}
