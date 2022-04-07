import { NavLink } from 'react-router-dom';

import { styled } from '@nextui-org/react';

import { RiHome7Fill, RiFootballFill } from 'react-icons/ri';

const Wrapper = styled('nav', {
	backgroundColor: '$white',
	bottom: 0,
	left: 0,
	length: 0,
	position: 'fixed',
	width: '100%',
	boxShadow: '$md',

	ul: {
		display: 'flex',
		justifyContent: 'center',
		margin: 0,
		padding: '$10 $0',

		li: {
			margin: 0,
			padding: '$0 $12',

			a: {
				color: '$gray300',
				display: 'block',
				position: 'relative',

				svg: {
					display: 'block',
				},

				'&:before': {
					backgroundColor: '$success',
					borderRadius: 16,
					bottom: 0,
					content: ' ',
					display: 'block',
					height: 4,
					left: '50%',
					opacity: 0,
					position: 'absolute',
					transition: 'all 0.3s ease-in-out',
					transform: 'translateX(-50%)',
					width: 4,
				},

				'&.active:before': {
					bottom: -8,
					opacity: 1,
				},
			},
		},
	},
});

const ICON_SIZE = 24;

export const MenuNavigation = () => {
	return (
		<Wrapper>
			<ul>
				<li>
					<NavLink to='/'>
						<RiHome7Fill size={ICON_SIZE} />
					</NavLink>
				</li>
				<li>
					<NavLink to='/fixtures'>
						<RiFootballFill size={ICON_SIZE} />
					</NavLink>
				</li>
			</ul>
		</Wrapper>
	);
};
