import { styled } from '@nextui-org/react';

import { useQuery } from 'react-query';

import { queryClient, QUERY_DATA } from 'src/@services';

const Wrapper = styled('ul', {
	alignItems: 'center',
	background: '$white',
	borderBottomLeftRadius: '$lg',
	borderBottomRightRadius: '$lg',
	display: 'flex',
	justifyContent: 'space-between',
	length: 0,
	margin: 0,
	padding: '$12 $10',

	li: {
		margin: 0,
		padding: 0,
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
	length: 0,

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

const LEAGUES = [
	{
		id: 39,
		name: 'Premier League',
	},

	{
		id: 140,
		name: 'La Liga',
	},

	{
		id: 135,
		name: 'Serie A',
	},

	{
		id: 71,
		name: 'Campeonato Brasileiro',
	},
];

export const Leagues = () => {
	const { data: league } = useQuery(QUERY_DATA.LEAGUE);

	const handleLeague = (id: number) => {
		queryClient.setQueryData(QUERY_DATA.LEAGUE, id);
	};

	return (
		<Wrapper>
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
		</Wrapper>
	);
};
