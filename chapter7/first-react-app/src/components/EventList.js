import styles from './styles/EventList.module.css';
export default function EventList({events, handleClick}) {
    return (
        <div>
            {events.map((event, index) => (
                    <div className={styles.card} key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete item</button>
                    </div>
                ))}
        </div>
    )
}
