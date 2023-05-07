import { Button } from '@mui/material';
import React, { useState } from 'react';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission here
  }

  return (
    <div>
      <h1>Employee Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        Designation
          <input type="text" value={designation} onChange={event => setDesignation(event.target.value)} />
        Location
          <input type="text" value={location} onChange={event => setLocation(event.target.value)} />
        Salary
          <input type="text" value={salary} onChange={event => setSalary(event.target.value)} />
        </label>
        </form>
        <Button variant='contained' align="centre" style={{backgroundColor:"blueviolet"}} >submit</Button>
        </div>
  )}
  export default EmployeeForm;
