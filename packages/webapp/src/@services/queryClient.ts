import { QueryClient } from 'react-query';

export const QUERY_DATA = {
	LEAGUE: 'league',
	MATCHS: 'matchs',
	SQUAD: 'squad',
	TEAM: 'teamSingle',
	TEAMS: 'teams',
	TEAM_ID: 'teamId',
	TEAM_INFO: 'teamInfo',
};

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});
