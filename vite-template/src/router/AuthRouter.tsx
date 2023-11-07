import { useLocation, useNavigate, useRoutes } from 'react-router-dom';
import { useEffect } from 'react';

const AuthEnter = (a: any) => {
  console.log(a);

  const { router } = a;
  const findRoutes: any = (routes: any, path: any) => {
    for (const val of router) {
      if (val.path === path) return val;
      if (val.children) return findRoutes(val.children, path);
    }
    return null;
  };

  const jumpRouter: any = (location: any, navigate: any) => {
    const { pathName } = location;
    const findRoute = findRoutes(router, pathName);
    if (!findRoute) return navigate('/404');
    if (findRoute.auth) {
      if (!localStorage.getItem('user')) navigate('/login');
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const routers = useRoutes(router);
  useEffect(() => {
    jumpRouter(location, navigate);
  }, [navigate, location]);
  return routers;
};

export default AuthEnter;
