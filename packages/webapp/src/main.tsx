import React from 'react';
import ReactDOM from 'react-dom';

import { NextUIProvider } from '@nextui-org/react';

import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { queryClient } from 'src/@services';

ReactDOM.render(
	<React.StrictMode>
		<NextUIProvider>
			<BrowserRouter>
				<QueryClientProvider client={queryClient}>
					<App />
					<ReactQueryDevtools />
				</QueryClientProvider>
			</BrowserRouter>
		</NextUIProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
