import React, { useState, useEffect } from 'react';
import './App.scss';
import { Input, Select, Card } from '@material-ui/core';
const App = () => {

  const [day, setDay] = useState('')
  const [month, setMonth] = useState(null)
  const [name, setName] = useState('')

  useEffect(() => {
    return () => {
      if(day>31){
        setDay(31)
      }
    };
  }, [day])
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
              <option value={o.toLowerCase()}>{o}</option>
            )}
          </Select>
        </div>
        <p>{day}</p><p>{month}</p><p>{name}</p>



      </div>
      <div className="Calenapp_column">
        <Card className="Calenapp_card">
          name1
          </Card>
          <Card className="Calenapp_card">
          name2
          </Card>
          <Card className="Calenapp_card">
          name3
          </Card>
      </div>
    </div>
  );
}

export default App;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]