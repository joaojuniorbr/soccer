import { Container, styled } from '@nextui-org/react';
import { useData } from 'src/@common';

const Image = styled('img', {
	borderRadius: '$sm',
	boxShadow: '$sm',
	margin: '$10 0',
});

export const TeamVenue = () => {
	const { teamSingle } = useData();

	return (
		<Container>
			<Image src={teamSingle?.venue.image} alt={teamSingle?.venue.name} />
		</Container>
	);
};
