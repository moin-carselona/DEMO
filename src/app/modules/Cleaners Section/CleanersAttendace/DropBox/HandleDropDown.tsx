import { LocalBaseURL } from "../../../../../BaseURLmanagement"
import React, { useState } from "react"
const HandleDropDown = ({ props }: any) => {
  LocalBaseURL()
  const [attendancestatus, setAttendancestatus] = useState("")
  const localKey = JSON.parse(localStorage.getItem("API") || "0")
  const Data = ["Pending", "Marked", "Job Done", "Admin Verified", "Absent", "Any Job Reassigned to other cleaner"]
  return (
    <div className='primary'>
      <select
        className='form-select form-select-solid'
        data-kt-select2='true'
        data-placeholder='Select option'
        data-allow-clear='true'
        id='supervisorid'
      // onChange={handleChange}
      >
        <option>{props?.attendance_status}</option>
        {Data?.map((item: any, index: number) => {
          return (
            <option value={index} key={index}>
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}
export default HandleDropDown