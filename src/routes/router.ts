import App from '@/pages/app/app';
import Three from '@/pages/three/three';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          index: true,
          Component: Three,
        },
      ],
    },
  ],
  {
    basename: '/',
    window: window,
  }
);

export default router;
