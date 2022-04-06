import { Container, Grid, styled } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { api, CONFIG_MAIN, QUERY_DATA } from 'src/@services';

import { ILeague, IResponseApi, ILeagueStandings } from 'src/@types';
import { Leagues, TeamRank } from '../molecules';

interface IResponse extends IResponseApi {
	response: [
		{
			league: ILeague;
		}
	];
}

const CardTeam = styled('div', {
	background: '$white',
	padding: '$6',
	borderRadius: '$md',
	length: 0,

	img: {
		display: 'block',
	},
});

export const Dashboard = () => {
	const [teams, setTeams] = useState<ILeagueStandings[]>([]);
	const { data: league } = useQuery(QUERY_DATA.LEAGUE);

	const { data: results, refetch: refreshLeague } = useQuery<IResponse>(
		[QUERY_DATA.TEAMS, league],
		async () => {
			try {
				if (league) {
					const response = await api.post('football', {
						url: 'standings',
						params: {
							season: CONFIG_MAIN.SEASSON,
							league: league,
						},
					});

					return response.data;
				} else {
					return null;
				}
			} catch (error) {
				console.log(error);
			}
		}
	);

	useEffect(() => {
		if (results && results.response) {
			const standings = results.response[0].league.standings[0];

			if (standings) {
				setTeams(standings);
			}
		}
	}, [results]);

	useEffect(() => {
		refreshLeague();
	}, [league]);

	return (
		<>
			<Leagues />
			<Container
				css={{
					paddingTop: '$10',
					paddingBottom: '$8',
				}}>
				<Grid.Container gap={1} justify='center'>
					{teams.map((item) => (
						<TeamRank key={item.team.id} item={item} />
					))}
				</Grid.Container>
			</Container>
		</>
	);
};
