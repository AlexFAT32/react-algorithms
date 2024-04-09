import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {links} from '@/config/links';
import {MainTemplate} from '@/templates/MainTemplate';
import {Menu} from '@/components/navigation/Menu';

const router = createBrowserRouter(links.map(link => {
  return {
    path: link.url,
    element: <MainTemplate menu={<Menu items={links} />}>{link.component}</MainTemplate> ,
  }
}));


export function Router() {
  return <RouterProvider router={router} />;
}
