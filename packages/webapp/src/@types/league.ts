import { IStatsStandinds } from './stats';
import { ITeam } from './team';

export interface ILeagueStandings {
	rank: number;
	team: ITeam;
	points: string;
	goalsDiff: string;
	group: string;
	form: string;
	status: string;
	description: string;
	all: IStatsStandinds;
	home: IStatsStandinds;
	away: IStatsStandinds;
	update: string;
}

export interface ILeague {
	id: string;
	name: string;
	country: string;
	logo: string;
	flag: string;
	season: string;
	standings: [ILeagueStandings[]];
}
