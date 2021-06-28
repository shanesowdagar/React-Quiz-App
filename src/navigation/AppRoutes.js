import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Quiz } from '../pages';
import Home from '../pages/Home';

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/quiz' component={Quiz} />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRoutes;
