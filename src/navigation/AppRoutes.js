import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Quiz, Results } from '../pages';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/quiz' component={Quiz} />
				<Route exact path='/results' component={Results} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRoutes;
