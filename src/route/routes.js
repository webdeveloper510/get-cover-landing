import Home from '../page/home';
import TAndC from '../page/tAndC';
import Policy from '../page/policy';
import Information from '../page/information';

const routes = [
    { path: "/", element: <Home /> },
    { path: "/terms-and-conditions", element: <TAndC /> },
    { path: "/privacy-policy", element: <Policy /> },
    { path: "/financial", element: <Information /> },
];

export default routes;