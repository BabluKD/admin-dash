import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
// import Signup from './containers/Signup';
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn, getInitialData } from "./actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";
import NewPage from "./containers/NewPage";
import Customers from "./containers/Customers";
import Layout from "./components/Layout";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    if (auth.authenticate) {
      dispatch(getInitialData());
    }
  }, [auth.authenticate]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={Signin} />
        <Layout>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/page" exact component={NewPage} />
          <PrivateRoute path="/category" exact component={Category} />
          <PrivateRoute path="/products" exact component={Products} />
          <PrivateRoute path="/orders" exact component={Orders} />
          <PrivateRoute path="/customers" exact component={Customers} />
        </Layout>
      </Switch>
    </BrowserRouter>
    // <div className="App">

    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/page" component={NewPage} />
    //     <Route path="/category" component={Category} />
    //     <Route path="/products" component={Products} />
    //     <Route path="/orders" component={Orders} />

    //     <Route path="/signin" component={Signin} />
    //     {/* <Route path="/signup" component={Signup} /> */}
    //   </Switch>
    // </div>
  );
}

export default App;
