import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:5001/',
});

export const CONFIG_MAIN = {
	SEASSON: '2021',
	LEAGUE: '39',
};

export * from './queryClient';
