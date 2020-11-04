import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

function AddClinicals(props) {
  const [componentName,setComponentName] = useState('')
  const [componentValue,setComponentValue] = useState('')
  const history = useHistory();

function handleSubmit(event){
  event.preventDefault();
  const data= {
    patient:props.match.params.patientId,
    componentName:componentName,
    componentValue:componentValue
  }
  axios.post('http://localhost:8000/clinicalsapi/clinicals',data).then(res=>{
    history.push('/');
  })
}

    return (
      <div>
       <h2>Add Clinical Data:</h2>
       <form>
      Clinical Entry Type: <select onChange={e=>setComponentName(e.target.value)}>
        <option>Select One</option>
        <option value="bp">Blood Pressure</option>
        <option value="hw">Height/Weight</option>
        <option value="heartrate">Heart Rate</option>
      </select>
      Component Value: <input type="text" name="componentValue" align="left" onChange={e=>setComponentValue(e.target.value)}/>
    
      <button onClick={handleSubmit.bind(this)}>Confirm</button>
       </form>
      </div>
    );
  }

export default  AddClinicals;