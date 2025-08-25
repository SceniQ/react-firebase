
import './App.css'
// react hook - 'use': used for creating component states that coudl change overtime
import React, { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "Tebza A's first React lesson", id: 1 },
    { title: "Mrembola's first React lesson", id: 2 },
    { title: "Sceniq's first React lesson", id: 3 }
  ])
  const handleClick = (id) => {
    setEvents((prevEvents) => { // this takes in the previous state value at the point of updating this state. That previous state value is guaranteed to be of up to date
      return prevEvents.filter((eventItem) => {
        return id !== eventItem.id
      })
    })
    console.log(id)
  }

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className="App">
      <Title title = "Mrembola's passed in title prop from App comp" subtitle="All the latest attempts"/>
      <button onClick={() => setShowModal(true)}>Add New Event</button>
      {/* <Title title = "hmm..." subtitle="HMMM!"/> */}
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {/* {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete item</button>
        </React.Fragment>
      ))} */}

      {showEvents && <EventList events={events} handleClick={handleClick}></EventList>}
      {showModal && 
        <Modal handleClose={closeModal} isSalesModal={false}>
        {/* <h2>10% effort is better than none!</h2>
        <h2>Terms and conditions</h2>
        <p>Let's get this! - Excepteur sit adipisicing veniam aute. Ex ad excepteur voluptate pariatur reprehenderit nisi dolore consequat cupidatat veniam occaecat ex. Velit esse cupidatat duis deserunt officia eu esse deserunt mollit proident nulla elit enim adipisicing. Fugiat Lorem dolor in consectetur eu irure aliquip laborum dolor.</p> */}
        <NewEventForm/>
      </Modal>
      }
      {/* <Modal handleClose={closeModal}>
        <h2>10% effort is better than none!</h2>
        <h2>Terms and conditions</h2>
        <p>Let's get this! - Excepteur sit adipisicing veniam aute. Ex ad excepteur voluptate pariatur reprehenderit nisi dolore consequat cupidatat veniam occaecat ex. Velit esse cupidatat duis deserunt officia eu esse deserunt mollit proident nulla elit enim adipisicing. Fugiat Lorem dolor in consectetur eu irure aliquip laborum dolor.</p>
      </Modal> */}
    </div>
  );
}

// always export components so that they can be imported and used in other files
export default App;
