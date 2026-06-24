import React from 'react'
import EmpTable from './EmpTable';
import AddEmployee from './AddEmployee';

export default function CrudEMp() {

const [employees, employeeSet] = React.useState([
  { id: 1, name: "Amit Sharma", dept: "IT", sal: 50000 },
  { id: 2, name: "Neha Verma", dept: "HR", sal: 45000 },
  { id: 3, name: "Rahul Singh", dept: "Finance", sal: 60000 },
  { id: 4, name: "Pooja Mehta", dept: "Marketing", sal: 48000 },
  { id: 5, name: "Vikas Gupta", dept: "IT", sal: 55000 },
  { id: 6, name: "Anjali Patel", dept: "HR", sal: 47000 },
  { id: 7, name: "Karan Kumar", dept: "Finance", sal: 62000 },
  { id: 8, name: "Sneha Reddy", dept: "Marketing", sal: 49000 },
  { id: 9, name: "Rohit Jain", dept: "IT", sal: 53000 },
  { id: 10, name: "Priya Nair", dept: "HR", sal: 46000 }
]);

const receiveData =(emp)=>{
  const newId = employees.length>0 ? employees[employees.length-1].id+1:1;
const employeeToAdd={
  id:newId,
  name:emp.name,
  dept:emp.dept,
  sal:Number(emp.sal)

}



employeeSet([...employees,employeeToAdd]);
 console.log("✅ Employee Added:", employeeToAdd);


}




const deleteEmployee = (id) =>{
if (window.confirm(`Delete employee with ID: ${id}?`)) {
            employeeSet(employees.filter(emp => emp.id !== id));
            console.log(`🗑️ Employee ID ${id} deleted`);
        }
}

  return (
    <>
    

     <AddEmployee onSave={receiveData} />
    <EmpTable employee={employees} onDelete={deleteEmployee}/>
    </>
  )
}
