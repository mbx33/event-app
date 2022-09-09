import React from 'react';
import Image from 'next/image';
import classes from './event-item.module.css';
import Button from '../ui/Button';

const EventItem = ({ event }) => {
	const { title, image, date, location, id } = event;
	const link = `/events/${id}`;

	const readableDate = new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formatAddress = location.replace(', ', '\n');

	return (
		<li className={classes.item}>
			<Image height={200} width={200} src={`/${image}`} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{readableDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formatAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={link}>Explore Event</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
