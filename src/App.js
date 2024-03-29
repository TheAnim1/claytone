import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import NotFound404 from './components/NotFound404/NotFound404';
import Purchase from './components/Purchase/Purchase';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute  path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute  path="/purchase/:productid">
              <Purchase></Purchase>
            </PrivateRoute>

            <Route  path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route  path="/login">
              <Login></Login>
            </Route>
            <Route  path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound404></NotFound404>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
