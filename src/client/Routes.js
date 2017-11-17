import Fixtures from '../assets/Fixtures';
import Home from '../assets/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/fixtures-page',
    component: Fixtures,
  }
];

export default routes;
