import React from 'react';
import { getEventById } from '../../event-data';
import { useRouter } from 'next/router';

const EventDetailPage = () => {
	const router = useRouter();

	const eventId = router.query.eventId;
	const event = getEventById(eventId);

	if (!event) {
		return <p>No event found!</p>;
	}

	return (
		<div>
			<h2>{event.title}</h2>
			<p>{event.description}</p>
			<p>{event.location}</p>
		</div>
	);
};

export default EventDetailPage;
