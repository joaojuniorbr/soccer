import { styled } from '@nextui-org/react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ILeagueStandings } from 'src/@types';

const Wrapper = styled('div', {
	marginBottom: '$8',
	width: '100%',

	a: {
		alignItems: 'center',
		background: '$white',
		borderRadius: '$sm',
		color: '$black',
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'hidden',
		padding: '$4 $10 $4 $17',
		position: 'relative',
		transition: 'all 0.3s ease-in-out',

		'&:hover': {
			boxShadow: '$sm',
			transform: 'translateY(-4px)',
		},
	},
});

const Position = styled('div', {
	alignItems: 'center',
	background: '$gray500',
	color: '$white',
	display: 'flex',
	fontSize: '$xs',
	fontWeight: '$bold',
	height: '100%',
	justifyContent: 'center',
	left: 0,
	position: 'absolute',
	top: 0,
	width: 40,

	span: {},
	variants: {
		status: {
			promotion: {
				background: '$successDark',
			},
			subPromotion: {
				background: '$warningDark',
			},
			relegation: {
				background: '$error',
			},
		},
	},
});

const Brand = styled('div', {
	flex: '0 0 auto',
	width: 56,
	img: {
		display: 'block',
		height: 40,
	},
});

const Info = styled('div', {
	alignItems: 'center',
	display: 'flex',
	flexWrap: 'wrap',
	flex: '1 0 0%',
	width: 'auto',
});

const InfoName = styled('div', {
	fontSize: '$xs',
	flex: '1 0 0%',
	width: 'auto',
});

const Results = styled('ul', {
	display: 'flex',
	justifyContent: 'flex-end',
	margin: 0,
	padding: 0,
});

const ResultPoints = styled('li', {
	margin: '0 0 0 $4',
	padding: 0,

	svg: {
		display: 'block',
	},

	variants: {
		status: {
			W: {
				color: '$success',
			},
			D: {
				color: '$warning',
			},
			L: {
				color: '$error',
			},
		},
	},
});

const LastestResults = ({ results = '' }) => {
	const form = results.split('');

	return (
		<Results>
			{form.map((item, index) => (
				<ResultPoints key={index} status={item as 'W' | 'D' | 'L'}>
					<RiCheckboxBlankCircleFill size={10} />
				</ResultPoints>
			))}
		</Results>
	);
};

export const TeamRank = ({ item }: { item: ILeagueStandings }) => {
	const statusPromotion = () => {
		const { description } = item;
		if (description) {
			if (description.includes('Relegation')) {
				return 'relegation';
			} else if (
				description.includes('Champions') ||
				description.includes('Libertadores')
			) {
				return 'promotion';
			} else if (
				description.includes('Europa') ||
				description.includes('Sudamericana')
			) {
				return 'subPromotion';
			}
		}
		return undefined;
	};
	return (
		<Wrapper>
			<Link to={`/team/${item.team.id}`}>
				<Position status={statusPromotion()}>{item.rank}</Position>

				<Brand>
					<img src={item.team.logo} alt={item.team.name} />
				</Brand>

				<Info>
					<InfoName>{item.team.name}</InfoName>
					<LastestResults results={item.form} />
				</Info>
			</Link>
		</Wrapper>
	);
};
