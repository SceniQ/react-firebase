import { useRef } from 'react';
import './styles/NewEventForm.css';

export default function NewEventForm({addEvent, setShowModal}) {
    const title = useRef()
    const date = useRef()

    const submitForm = (e) => {
        e.preventDefault()
        
        const event = {
            title: title.current.value,
            date:date.current.value,
            id: Math.floor(Math.random() * 10000)
        }
        console.log(event)
        //setEvents
        addEvent(event)
        title.current.value=""
        date.current.value=""
        setShowModal(false)
    }

  return (
    <form className='new-event-form' onSubmit={submitForm}>
        <label>
            <span>Event title:</span>
            <input type="text" ref={title}/>
        </label>
        <label>
            <span>Event date:</span>
            <input type="date" ref={date}/>
        </label>
        <button>Submit</button>
    </form>
  )
}
