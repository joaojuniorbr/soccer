import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Loading, styled } from '@nextui-org/react';

import { api, CONFIG_MAIN, queryClient, QUERY_DATA } from 'src/@services';

import { ITeamSingle } from 'src/@types';

import { TeamHeader, TeamVenue } from 'src/@components/molecules';

const WrapperLoading = styled('div', {
	position: 'fixed',
	height: '100%',
	left: 0,
	top: 0,
	backgroundColor: '$white',
	alignItems: 'center',
	justifyContent: 'center',
	display: 'flex',
	width: '100%',
	zIndex: 9,
});

export const Team = () => {
	const { data: league } = useQuery(QUERY_DATA.LEAGUE);

	const params = useParams();

	const currentTeam = params.id as string;

	const { isFetched } = useQuery<ITeamSingle>(
		[QUERY_DATA.TEAM, league, currentTeam],
		async () => {
			try {
				const response = await api.post('football', {
					url: 'teams',
					params: {
						id: currentTeam,
						season: CONFIG_MAIN.SEASSON,
						league: league,
					},
				});

				return response.data.response[0];
			} catch (error) {
				console.log(error);
			}
		}
	);

	useEffect(() => {
		queryClient.setQueryData(QUERY_DATA.TEAM_ID, currentTeam);
	}, []);

	if (!isFetched) {
		return (
			<WrapperLoading>
				<Loading size='xl' />
			</WrapperLoading>
		);
	}

	return (
		<>
			<TeamHeader />
			<TeamVenue />
		</>
	);
};
