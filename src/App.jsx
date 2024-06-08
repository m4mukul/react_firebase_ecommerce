
import NoPage from "./pages/noPage/NoPage";
import Home from "./pages/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProductInfo from "./pages/productInfo/ProductInfo";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProducts/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddproductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyContextProvider from "./context/MyContextProvider";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import { Provider } from "react-redux";
import { store } from "./store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/productinfo/:id",
        element: <ProductInfo />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/allproduct",
        element: <AllProduct />,
      },
      {
        path: "/user-dashboard",
        element: <ProtectedRouteForUser >
                  <UserDashboard />
        </ProtectedRouteForUser> ,
      },
      {
        path: "/admin-dashboard",
        element: <ProtectedRouteForAdmin><AdminDashboard /></ProtectedRouteForAdmin> ,
      },
      {
        path: "/category/:categoryname",
        element: <CategoryPage /> ,
      },
      
    ],
  },
  
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/addproduct",
    element:  <ProtectedRouteForAdmin><AddProductPage /></ProtectedRouteForAdmin>,
  },
  {
    path: "/updateproduct/:id",
    element:  <ProtectedRouteForAdmin><UpdateProductPage /></ProtectedRouteForAdmin>,
  },
  {
    path: "*",
    element: <NoPage />,
  },
]);
const App = () => {
  return (
   <Provider store={store}>
     <MyContextProvider>
      <RouterProvider router={router} />
      <Toaster />
    </MyContextProvider>
   </Provider>
  );
}

export default App;