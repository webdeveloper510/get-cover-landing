import Home from '../page/home';
import TAndC from '../page/tAndC';
import Policy from '../page/policy';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/terms-and-conditions", element: <TAndC /> },
    { path: "/privacy-policy", element: <Policy /> },
];

export default routes;