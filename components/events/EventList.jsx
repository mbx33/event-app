import EventItem from './EventItem';
import classes from './event-item.module.css';

const EventList = (props) => {
	const { items } = props;

	return (
		<ul className={classes.list}>
			{items.map((event) => (
				<EventItem key={event.id} event={event} />
			))}
		</ul>
	);
};

export default EventList;
