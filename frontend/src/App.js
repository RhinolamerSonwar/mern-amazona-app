// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, Route, Link } from "react-router-dom";
// import { signOut } from "./actions/userActions";
// import PlaceOrderScreen from "./reducers/PlaceOrderScreen";

// import CartScreen from "./Screens/CartScreen";
// import HomeScreen from "./Screens/HomeScreen";
// import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
// import OrderScreen from "./Screens/OrderScreen";
// import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
// import ProductScreen from "./Screens/ProductScreen";
// import ProfileScreen from "./Screens/ProfileScreen";
// import RegisterScreen from "./Screens/RegisterScreen";
// import ShippingAddressScreen from "./Screens/ShippingAddressScreen";

// import SigninScreen from "./Screens/SigninScreen";

// function App() {
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;
//   const userSignin = useSelector((state) => state.userSignin);
//   const { userInfo } = userSignin;
//   const dispatch = useDispatch();
//   const signoutHandler = () => {
//     dispatch(signOut());
//   };
//   return (
//     <BrowserRouter>
//       <div className="grid-container">
//         <header className="row">
//           <div>
//             <Link className="brand" to="/">
//               amazona
//             </Link>
//           </div>
//           <div>
//             <Link to="/cart">
//               Cart
//               {cartItems.length > 0 && (
//                 <span className="badge">{cartItems.length}</span>
//               )}
//             </Link>
//             {userInfo ? (
//               <div className="dropdown">
//                 <Link to="#">
//                   {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
//                 </Link>
//                 <ul className="dropdown-content">
//                   <li>
//                     <Link to="/profile">User Profile</Link>
//                   </li>
//                   <li>
//                     <Link to="/orderhistory">Order History</Link>
//                   </li>
//                   <li>
//                     <Link to="/signout" onClick={signoutHandler}>
//                       Sign Out
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             ) : (
//               <Link to="/signin">Sign In</Link>
//             )}
//           </div>
//         </header>
//         <main>
//           <Route path="/cart/:id?" component={CartScreen}></Route>
//           <Route path="/product/:id" component={ProductScreen}></Route>
//           <Route path="/signin" component={SigninScreen}></Route>
//           <Route path="/register" component={RegisterScreen}></Route>
//           <Route path="/shipping" component={ShippingAddressScreen}></Route>
//           <Route path="/payment" component={PaymentMethodScreen}></Route>
//           <Route path="/placeorder" component={PlaceOrderScreen}></Route>
//           <Route path="/order/:id" component={OrderScreen}></Route>
//           <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
//           <Route path="/profile" component={ProfileScreen}></Route>
//           <Route path="/" component={HomeScreen} exact></Route>
//         </main>
//         <footer className="row center">
//           {" "}
//           All right reserved @RhinolamerSonwar
//         </footer>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { signOut } from "./actions/userActions";
import PlaceOrderScreen from "./reducers/PlaceOrderScreen";

import CartScreen from "./Screens/CartScreen";
import HomeScreen from "./Screens/HomeScreen";
import OrderHistoryScreen from "./Screens/OrderHistoryScreen";
import OrderScreen from "./Screens/OrderScreen";
import PaymentMethodScreen from "./Screens/PaymentMethodScreen";
import ProductScreen from "./Screens/ProductScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import PrivateRoute from "./components/PrivateRoute";

import SigninScreen from "./Screens/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signOut());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signOut" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
