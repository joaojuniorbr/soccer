import { QueryClient } from 'react-query';

export const QUERY_DATA = {
	TEAMS: 'teams',
	TEAM: 'teamSingle',
	TEAM_INFO: 'teamInfo',
	MATCHS: 'matchs',
	SQUAD: 'squad',
	LEAGUE: 'league',
};

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});
