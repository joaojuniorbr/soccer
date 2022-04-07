import { useQuery } from 'react-query';

import { getCountryFlag, useData } from 'src/@common';
import { ITeamSingle } from 'src/@types';
import { QUERY_DATA } from 'src/@services';
import { Container, styled } from '@nextui-org/react';

const Wrapper = styled('header', {
	alignItems: 'flex-end',
	borderRadius: '$lg',
	display: 'flex',
	padding: '$10 $0',
	width: '100%',
});

const Logo = styled('div', {
	alignItems: 'center',
	backgroundColor: '$white',
	borderRadius: '$xs',
	boxShadow: '$md',
	display: 'flex',
	height: 96,
	justifyContent: 'center',
	marginRight: '$8',
	width: 96,

	img: {
		height: 72,
		width: 'auto',
	},
});

const Info = styled('div', {
	paddingBottom: '$4',

	h1: {
		fontSize: '$md',
		fontWeight: '$extrabold',
		margin: '$0 $0 $3',
		lineHeight: 1.2,
	},

	h2: {
		alignItems: 'center',
		display: 'flex',
		fontSize: '$xs',
		fontWeight: '$bold',
		margin: '$0',

		img: {
			borderRadius: 40,
			height: 16,
			marginRight: '$2',
			objectFit: 'cover',
			width: 16,
		},
	},
});

export const TeamHeader = () => {
	const { teamSingle } = useData();

	if (!teamSingle) {
		return null;
	}

	return (
		<Container
			css={{
				background: '$white',
			}}>
			<Wrapper>
				<Logo>
					<img src={teamSingle.team.logo} alt={teamSingle.team.name} />
				</Logo>
				<Info>
					<h1>{teamSingle.team.name}</h1>
					<h2>
						<img
							src={getCountryFlag(teamSingle.team.country)}
							alt={teamSingle.team.country}
						/>
						{teamSingle.venue.city}
					</h2>
				</Info>
			</Wrapper>
		</Container>
	);
};
