import { useRoutes } from 'react-router-dom';
import Routes from './routes';

function WraperRoutes() {
  const element = useRoutes(Routes); // 识别当前的url， 返回对应的组件
  return element;
}
// const Router = createBrowserRouter(Routes);
export default WraperRoutes;
