import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetail from './components/CoffeeDetail.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:5000/coffees'),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "coffeeDetail/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: CoffeeDetail,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path:"/signin",
        Component: SignIn,
      },
      {
        path:"/signup",
        Component: SignUp,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
