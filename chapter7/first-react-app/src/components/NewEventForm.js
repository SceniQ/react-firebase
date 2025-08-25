import { useState } from 'react';
import './styles/NewEventForm.css';

export default function NewEventForm({addEvent, setShowModal}) {
    const [title, setTitle] = useState('')
    const [date,setDate] = useState('')

    const submitForm = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date:date,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        //setEvents
        addEvent(event)
        setTitle('')
        setDate('')
        setShowModal(false)
    }

  return (
    <form className='new-event-form' onSubmit={submitForm}>
        <label>
            <span>Event title:</span>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
            <span>Event date:</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
        </label>
        <button>Submit</button>
    </form>
  )
}
