import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const {user, isLoading, admin} = useAuth()
    if(isLoading){
        return <div className="text-center">
            
        <div className="spinner-border spinner-color" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email && admin? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default AdminRoute;