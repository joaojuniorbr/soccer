export const countries = [
	{
		name: 'Spain',
		code: 'ES',
		flag: 'https://media.api-sports.io/flags/es.svg',
	},
	{
		name: 'England',
		code: 'GB',
		flag: 'https://media.api-sports.io/flags/gb.svg',
	},
	{
		name: 'Italy',
		code: 'IT',
		flag: 'https://media.api-sports.io/flags/it.svg',
	},
	{
		name: 'Brazil',
		code: 'BR',
		flag: 'https://media.api-sports.io/flags/br.svg',
	},
];

export const getCountryFlag = (name: string) => {
	const country = countries.find((item) => item.name === name);
	return country?.flag;
};
