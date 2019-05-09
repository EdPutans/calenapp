import React, { useState, useEffect } from 'react';
import './App.scss';
import { Input, Select, Card } from '@material-ui/core';
import { isUserWhitespacable } from '@babel/types';


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const postAPerson = (name, day, month) => fetch('http://localhost:3010/users',{
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    user:{
      name, day, month
    }
  })
}).then(response => response.json())


const fetchPeople = () => fetch('http://localhost:3010/users').then(response => response.json())

const App = () => {

  const [day, setDay] = useState('')
  const [month, setMonth] = useState(null)
  const [name, setName] = useState('')
  const [people, setPeople] = useState([])
  useEffect(() => {
    return () => {
      if(day>31){
        setDay(31)
      }
    };
  }, [day])

useEffect(() => {
    fetchPeople().then(r=>
    setPeople(r))
},[])

  return (
    <div className='Calenapp'>
      <div className="Calenapp_column">
        <Input
           placeholder="Name"
           value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            className="Calenapp_day"
          />
              <div>
          <Input
            value={day}
            inputProps={{ min: "0", max: "31", step: "1", }}
            placeholder="Day"
            onChange={e => setDay(e.target.value)}
            type="number"
            className="Calenapp_day"
          />
          <Select name="Month" className="Calenapp_month" onChange={e => setMonth(e.target.value)} placeholder="month">
          <option value={null} disabled>
            select month yo
          </option>
            {months.map(o =>
              <option value={o}>{o}</option>
            )}
          </Select>
        </div>
      </div>
      <div className="Calenapp_column">
      {people.map(p=>  p.day && p.name && p.month && <Card className="Calenapp_card">
          {p.name} - {p.day} of {p.month}
            </Card>
          )}
      </div>
      <button onClick={()=>postAPerson(name, day, month)}>YEET</button>
    </div>
  );
}

export default App;
