import { Container, styled } from '@nextui-org/react';

import { useQuery } from 'react-query';

import { leagues } from 'src/@common';

import { queryClient, QUERY_DATA } from 'src/@services';

const Wrapper = styled('div', {
	background: '$white',
	borderBottomLeftRadius: '$lg',
	borderBottomRightRadius: '$lg',
	margin: 0,
	padding: '$12 $0',

	ul: {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-between',
		margin: 0,
		padding: 0,
		li: {
			margin: 0,
			padding: 0,
		},
	},
});

const ButtonLogo = styled('button', {
	alignItems: 'center',
	backgroundColor: '$white',
	borderColor: '$white',
	borderRadius: 100,
	borderStyle: 'solid',
	borderWidth: 2,
	display: 'flex',
	height: 64,
	justifyContent: 'center',
	padding: 0,
	transition: 'all 0.5s',
	width: 64,

	img: {
		height: 56,
		transition: 'all 0.5s',
	},

	variants: {
		active: {
			true: {
				borderColor: '$success',
				boxShadow: '$xs',

				img: {
					height: 38,
				},
			},
		},
	},
});

const LEAGUES = leagues;

export const Leagues = () => {
	const { data: league } = useQuery(QUERY_DATA.LEAGUE);

	const handleLeague = (id: number) => {
		queryClient.setQueryData(QUERY_DATA.LEAGUE, id);
	};

	return (
		<Wrapper>
			<Container>
				<ul>
					{LEAGUES.map((item) => (
						<li key={item.id}>
							<ButtonLogo
								onClick={() => handleLeague(item.id)}
								active={item.id === league}>
								<img
									src={`https://media.api-sports.io/football/leagues/${item.id}.png`}
									alt={item.name}
								/>
							</ButtonLogo>
						</li>
					))}
				</ul>
			</Container>
		</Wrapper>
	);
};
