import Home from '../page/home';
import TAndC from '../page/tAndC';
import Policy from '../page/policy';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/T&C", element: <TAndC /> },
    { path: "/Privacy-Policy", element: <Policy /> },
];

export default routes;