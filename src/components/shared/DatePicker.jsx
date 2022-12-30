import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const DatePicker = () => {
  const [value, onChange] = useState(new Date());

    
  return (
    <div>
       <Calendar onChange={onChange} value={value} />
    </div>
  )
}
