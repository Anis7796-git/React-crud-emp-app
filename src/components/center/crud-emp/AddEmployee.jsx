import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function AddEmployee({onSave}) {

    const [flag, setState] = React.useState(false);
    const [formdata, formSave] = React.useState({ name: "", sal: "", dept: "" });
    const changestate = () => {

        setState(flag => {
          
            return !flag;
        });
    }


    const handlesavedata = () =>{
        

         onSave(formdata);
         formSave({ name: "", sal: "", dept: "" });
           setState(false);
      };

function handleChange(e){
 const { name, value } = e.target;
        
        console.log("Field changed:", name);
        console.log("New value:", value);
        
        // Update state
        formSave(prevData => ({
            ...prevData,
            [name]: value
        }));
}

    return (
        <><Modal show={flag} onHide={changestate} centered>
            <Modal.Header closeButton>

                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <div className="mb-3">
                        <label>Name</label>
                        <input type="text"
                         name="name" 
                         onChange={handleChange} 
                         value={formdata.name}
                         className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Salary</label>
                        <input type="number"
                         name="sal" 
                         
                         value={formdata.sal} 
                         onChange={handleChange}  
                          className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label>Department</label>
                        <input type="text"
                         name="dept" 
                         value={formdata.dept}
                         onChange={handleChange} 
                            className="form-control" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={changestate}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlesavedata}>
                    Save Employee
                </Button>
            </Modal.Footer>

        </Modal>
            <button onClick={changestate} type="button" className="btn btn-outline-primary btn-lg m-1">Add Employee</button>
        </>
    )
}
