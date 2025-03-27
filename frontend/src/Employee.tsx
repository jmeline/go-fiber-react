
import { useEffect, useState } from 'react'

export function Employee({ id }) {

  const [employee, setEmployee] = useState({
     firstName: "",
     lastName: "",
     age: 0,
     employeeId: 0,
     address: ""
  })

  // useEffect for syncing with remote sources. In this case
  // api calls.
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`http://localhost:33333/${id}`)
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json()
        setEmployee(json)
      } catch (err) {
        console.error("Error fetching data", err)
      }
    }

    getData()
  }, [id])

  // early return if we don't have any data
  if (!employee.firstName) {
    return (
      <div> I don't have data yet... Loading </div>
    )
  }


  return (
    <>
      <h3> Employee info for: {employee.firstName} {employee.lastName} </h3>
      <h3> EmployeeId: {employee.employeeId} </h3>
      <h3> Age: {employee.age} </h3>
      <h3> Address: {employee.address} </h3>
    </>
  )
}
