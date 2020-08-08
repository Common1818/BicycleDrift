import React, { useEffect } from 'react';
import Navbar from './components/layout/navbar/Navbar';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/layout/Footer';
import LoginSignupForm from './components/auth/LoginSignupForm';
import Home from './components/home/Home';
import Alert from './components/layout/Alert';
import store from './store';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import ProductPage from './components/productPage/ProductPage';
import ProductForm from './components/admin/AddProduct/ProdutForm';
import AdminRoute from './routing/AdminRoute';
import AdminPanel from './components/admin/AdminPanel';
import AddProductColor from './components/admin/AddProduct/AddProductColor';
import UpdateProduct from './components/admin/EditProduct/UpdateProduct';
import Products from './components/products/Products';

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
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={LoginSignupForm} />
            <Route exact path='/product/:productId' component={ProductPage} />
            <Route exact path='/products/:type' component={Products} />
            <AdminRoute
               exact
               path='/admin/product/add'
               component={ProductForm}
            />
            <AdminRoute
               exact
               path='/admin/product/addColor'
               component={AddProductColor}
            />
            <AdminRoute
               exact
               path='/admin/update/product/:productId'
               component={UpdateProduct}
            />
            <AdminRoute exact path='/admin' component={AdminPanel} />
         </Switch>
         <Footer />
      </div>
   );
};

export default App;
