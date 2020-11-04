import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function AddPatient() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [age,setAge] = useState('')
  const history = useHistory();

function handleSubmit(event){
  event.preventDefault();
  const patientData= {
    firstName:firstName,
    lastName:lastName,
    age:age
  }
  axios.post('http://localhost:8000/clinicalsapi/patients',patientData).then(res=>{
    history.push('/');
  })
}

    return (
      <div>
       <h2>Create Patient:</h2>
       <form>
      First Name: <input type="text" name="firstName" align="left" onChange={e=>setFirstName(e.target.value)}/>
      Last Name: <input type="text" name="lastName" align="left" onChange={e=>setLastName(e.target.value)}/>
      Age: <input type="text" name="age" align="left" onChange={e=>setAge(e.target.value)}/>
      <button onClick={handleSubmit.bind(this)}>Confirm</button>
       </form>
      </div>
    );
  }

export default AddPatient;