import App from '@/pages/app/app';
import Home from '@/pages/app/home/home';
import Mail from '@/pages/mail/mail';
import Three from '@/pages/three/three';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          Component: Home,
          index: true,
        },
        {
          path: 'three',
          Component: Three,
        },
      ],
    },
  ],
  {
    basename: '/',
    window: window,
  },
);

export default router;
