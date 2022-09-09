import { getFeaturedEvents } from '../event-data';
import EventList from '../components/events/EventList';

//Home Page Show featured Events

const HomePage = () => {
	const featuredEvents = getFeaturedEvents();

	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
};

export default HomePage;
