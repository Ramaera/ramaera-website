import { FormWrapper } from "./FormWrapper"
// import { useState } from "react"
import { useDispatch } from "react-redux"
 import {
  changeDepartment,
  changeJobDescription,
  changeJobLocation,
  changeJobTitle,
  changeJobType,
  changeJobStatus,
 } from "../../../state/slice/jobSlice"

export function JobForm({}) {
   const dispatch = useDispatch()
    
  return (
    <FormWrapper title="JOB POST">
      <div style={{ width: "500px", marginTop: "30px" }}>
        <label style={{ fontSize: "1.3rem", opacity: ".9", fontWeight: "600" ,color:"#5a5a5a"}}>
          Job Details
        </label>
      </div>
      <div style={{ width: "450px" }}></div>
      <hr className="lineHr1" />
      <hr className="lineHr2" />

      <div style={{ width: "500px" }}>
        <label>Job Department</label>
        <br />
        <select
          required
          onChange={(e) => dispatch(changeDepartment(e.target.value))}
        >
          <option value={""} disabled selected>
            Select Job Department
          </option>
          <option value={"Marketing"}>Marketing</option>
          <option value={"Development"}>Development</option>
          <option value={"Product"}>Product</option>
        </select>
      </div>

      <div style={{ width: "450px" }}>
        <label>Job Title</label>
        <br />
        <input
          required
          type="text"
          onChange={(e) => dispatch(changeJobTitle(e.target.value))}
          placeholder="Type Job Title"
        />
      </div>
      
      <div style={{ width: "500px" }}>
        <label>Job location</label>
        <br />
        <select
          required
          onChange={(e) => dispatch(changeJobLocation(e.target.value))}
        >
          <option value={""} disabled selected>
            Select Job location
          </option>
          <option value={"Noida,IN"}>Noida,IN</option>
          <option value={"Remote"}>Remote</option>
        </select>
      </div>

      <div style={{ width: "450px" }}>
        <label>Job Type </label>
        <br />
        <select
          required
          onChange={(e) => dispatch(changeJobType(e.target.value))}
        >
          <option value={""} disabled selected>
            Select Job Type
          </option>
          <option value={"Full Time"}>Full Time</option>
          <option value={"Internship"}>Internship</option>
        </select>
      </div>

      <div style={{ width: "500px" }}>
        <label>Job Description</label>
        <br />
        <textarea
          required
          rows={5}
          cols={80}
          type="text"
          onChange={(e) => dispatch(changeJobDescription(e.target.value))}
          placeholder="Type Job Description"
        />
      </div>  

      <div style={{ width: "450px" }}>
        <label>Job Status </label>
        <br />
        <select
          required
          onChange={(e) => dispatch(changeJobStatus(e.target.value))}
        >
          <option value={""} disabled selected>
            Select Job Status
          </option>
          <option value={"ACTIVE"}>ACTIVE</option>
          <option value={"COMPLETED"}>COMPLETED</option>
          <option value={"PENDING"}>PENDING</option>
        </select>
      </div>   
  
    </FormWrapper>
  )
}

const StyleImage = () => {
  return <div>StyleImage</div>
}

export default StyleImage