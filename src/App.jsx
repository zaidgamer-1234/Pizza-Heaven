import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Error from "./ui/Error";
import AppLayout from "./AppLayout";
import CreateOrder from "./pages/CreateOrder";
import OrderDetails from "./pages/OrderDetails";
import { Navigate } from "react-router-dom";
import Menu, { loader as menuLoader } from "./pages/Menu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/neworder",
        element: <CreateOrder />,
      },
    ],
  },
  {
    path: "/order/:id",
    element: <OrderDetails />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
