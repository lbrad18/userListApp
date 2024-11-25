import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import UserList from './routes/UserList.jsx';
import Root from './routes/Root.jsx';
import UserDetails from './routes/userDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <UserList/>,
  },
  {
    path: '/users',
    element: <UserList/>,
    children: [{
      path: '/users/:id',
      element: <UserDetails/>,
    }],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
