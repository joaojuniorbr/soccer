export interface ITeamVenue {
	id: string;
	name: string;
	address: string;
	city: string;
	capacity: string;
	surface: string;
	image: string;
}

export interface ITeam {
	id: number;
	logo: string;
	code: string;
	country: string;
	national: boolean;
	area: {
		id: number;
		name: string;
	};
	name: string;
	shortName: string;
	tla: string;
	crestUrl: string;
	address: string;
	phone: string;
	website: string;
	email: string;
	founded: string;
	clubColors: string;
	venue: string;
	lastUpdated: string;
}

export interface ITeamSingle {
	team: ITeam;
	venue: ITeamVenue;
}
