import React from 'react'

export default function EmpTable({employee=[],onDelete}) {
   
  return (
    <>
      <table className="table table-dark table-sm w-75 mx-auto">
        <thead>
          <tr style={{textAlign:"center"}}>
            <th >Id</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* id: 1, name: "Amit Sharma", dept: "IT", sal: 50000  */}
        <tbody>
            {employee.map((emp,index)=>(
                <tr key={index} style={{textAlign:"center"}}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
           <td>{emp.dept}</td>
            <td>{emp.sal}</td>
            <td>
              <button  className="btn btn-danger btn-sm" onClick={() => onDelete(emp.id)}>Del</button>
            </td>
          </tr>
            ))}
          
        </tbody>
      </table>
    </>
  )
}
