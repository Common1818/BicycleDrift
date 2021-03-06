import React, { useEffect } from "react";
import Navbar from "./components/layout/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/layout/Footer";
import LoginSignupForm from "./components/auth/LoginSignupForm";
import Home from "./components/home/Home";
import Alert from "./components/layout/Alert";
import store from "./store";
import { setAuthToken } from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import ProductPage from "./components/productPage/ProductPage";
import ProductForm from "./components/admin/AddProduct/ProdutForm";
import AdminRoute from "./routing/AdminRoute";
import PrivateRoute from "./routing/PrivateRoute";
import AdminPanel from "./components/admin/AdminPanel";
import AddProductColor from "./components/admin/AddProduct/AddProductColor";
import UpdateProduct from "./components/admin/EditProduct/UpdateProduct";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import Products from "./components/products/Products";
import Payment from "./components/Payment/Payment";
import Cart from "./components/cart/Cart";
import OrderPage from "./components/order/OrderPage";
import AccessoryForm from "./components/admin/AddAccessory/AccessoryForm";
import UserOrders from "./components/order/UserOrders";
import AdminOrderPage from "./components/admin/AdminOrderPage";
// import payment from "./reducers/payment";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// bootstrap

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginSignupForm} />
        <Route exact path="/product/:productId" component={ProductPage} />
        <Route exact path="/products/:type" component={Products} />
        <Route exact path="/forgotpassword" component={ForgotPasswordForm} />
        <Route exact path="/mycart" component={Cart} />
        <AdminRoute exact path="/admin/product/add" component={ProductForm} />
        <Route exact path="/admin/accessory/add" component={AccessoryForm} />
        <PrivateRoute exact path="/myOrders" component={UserOrders} />
        <AdminRoute
          exact
          path="/admin/product/addColor"
          component={AddProductColor}
        />
        <AdminRoute
          exact
          path="/admin/update/product/:productId"
          component={UpdateProduct}
        />
        <AdminRoute exact path="/admin" component={AdminPanel} />
        <AdminRoute
          exact
          path="/adminOrder/:orderId"
          component={AdminOrderPage}
        />
        <Route exact path="/order/:orderId" component={OrderPage} />
        <Route exact path="/paynow" component={Payment} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
