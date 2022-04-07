import { globalCss } from '@nextui-org/react';

import { Route, Routes } from 'react-router-dom';

import { Dashboard, Team } from 'src/@components/pages';
import { MenuNavigation } from './@components/molecules';

const globalStyles = globalCss({
	html: {
		height: '100%',

		body: {
			fontFamily: '"Montserrat", sans-serif',
			height: '100%',

			'#root': {
				backgroundColor: '$gray100',
				minHeight: '100%',
				paddingBottom: '72px',
			},
		},
	},
});

function App() {
	globalStyles();

	return (
		<>
			<Routes>
				<Route path='/' element={<Dashboard />} />
				<Route path='/team/:id' element={<Team />} />
			</Routes>

			<MenuNavigation />
		</>
	);
}

export default App;
