import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import { Link } from "react-router-dom";
function Home() {
  
    const [patientData,setPatientData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/clinicalsapi/patients').then(res=>{
            setPatientData(res.data);
        })
    },patientData)

    return (
      <div>
       <h2>Patients:</h2>
       <table align='center'>
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Age</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {patientData.map(patient=><RowCreator item={patient}/>)}
            </tbody>
       </table>
       <Link to={'/addPatient'}>Register Patient</Link>
      </div>
    );
  }

class RowCreator extends React.Component{
    render(){
        var patient = this.props.item;
        return <tr>
            <td>{patient.firstName}</td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'/addClinicals/'+patient._id}>Add Data</Link></td>
        </tr>
    }
}


export default Home;












