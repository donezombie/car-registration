import { lazy } from 'react';
import withErrorBoundary from 'components/HOCs/withErrorBoundary';

const HomePage = lazy(() => import('views/Home'));
const Page404 = lazy(() => import('views/Page404'));

export default [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: withErrorBoundary(HomePage),
  },
  { name: '404', component: withErrorBoundary(Page404) },
];
