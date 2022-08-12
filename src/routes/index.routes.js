import Home from '../pages/Home';
import PrimerNivel from '../pages/PrimerNivel';
import SegundoNivel from '../pages/SegundoNivel';
import TercerNivel from '../pages/TercerNivel';
import Error404 from '../pages/Error404';
import readyGame from '../utils/readyGame';

const routes = {
  '/': Home,
  '/primer-nivel': PrimerNivel,
  '/segundo-nivel': SegundoNivel,
  '/tercer-nivel': TercerNivel
}

const router = async () => {
  const content = null || document.getElementById('content');

  const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
  const resolveRoutes = (route) => {
    if(route.length <= 3) {
      let validRoute = route === '/' ? route : '/primer-nivel';
      return validRoute;
    }
    return `/${route}`;
  };

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render();

  readyGame();
}

export default router;