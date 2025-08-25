import { useState } from 'react';
import './styles/NewEventForm.css';

export default function NewEventForm() {
    const [title, setTitle] = useState('')
    const [date,setDate] = useState('')

  return (
    <form className='new-event-form'>
        <label>
            <span>Event title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <span>Event date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>
        <button>Submit</button>
        <p>Added title: {title}, Date: {date}</p>
        <a href="#" style={{color:"#555"}} onClick={() => {setTitle('');setDate('')}}>reset form</a>
    </form>
  )
}
