import { useQuery } from 'react-query';
import { QUERY_DATA } from 'src/@services';
import { ITeamSingle } from 'src/@types';

export const useData = () => {
	const { data: league } = useQuery(QUERY_DATA.LEAGUE);
	const { data: teamId } = useQuery(QUERY_DATA.TEAM_ID);

	const { data: teamSingle } = useQuery<ITeamSingle>([
		QUERY_DATA.TEAM,
		league,
		teamId,
	]);

	return {
		league,
		teamId,
		teamSingle,
	};
};
