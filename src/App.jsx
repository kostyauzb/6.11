import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Layout
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
// Pages

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <Product />
        },
        {
          path: "cart",
          element: <Cart />
        }
      ],
    },
  ]);
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
