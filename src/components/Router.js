import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import Setup from './Setup/Setup';
import NotFound from './NotFound/NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Setup} />
			<Route path="/start" component={App} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
)

export default Router;