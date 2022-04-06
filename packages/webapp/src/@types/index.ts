export interface IResponseApi {
	get: string;
	parameters: object;
	errors: [];
	results: number;
	paging: {
		current: number;
		total: number;
	};
}

export * from './league';
export * from './stats';
export * from './team';
