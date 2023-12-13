import App from '@/pages/app/app';
import ThreeExample from '@/pages/three/three';
import XComponent from '@/pages/x/x';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          index: true,
          Component: ThreeExample,
        },
        {
          path: 'x',
          Component: XComponent
        }
      ],
    },
  ],
  {
    basename: '/',
    window: window,
  }
);

export default router;
