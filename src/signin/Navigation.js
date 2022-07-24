import React from "react";
import Button from 'react-bootstrap/Button';
import "./Navigation.css";

const Navigation = ({ isSignedin, onRouteChange }) => {
  return (
    <div className="navigation">
      {isSignedin ? (
            <Button variant="outline-light" className="px-4" onClick={() => onRouteChange("signin")}>Signout</Button>
                ) : (
        <div>
            <Button variant="outline-light" className="mx-3 px-4" onClick={() => onRouteChange("signin")}>Signin</Button>{' '}
            <Button variant="outline-light" className="px-4" onClick={() => onRouteChange("register")}>Register</Button>{' '}
        </div>
      )}
    </div>
  );
};

export default Navigation;
