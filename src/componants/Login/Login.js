import React from "react";
import { Container } from "react-bootstrap";
import login from "../../images/login.jpeg";
import googleLogo from "../../images/googleLogo.png";
import useAuth from "../../hooks/useAuth";
import { useLocation,useHistory } from "react-router";

const Login = () => {
  const { handleGoogleSignIn, handleGoogleSignOut, user,setUser,setLoading,setError } = useAuth();
  
  const location = useLocation();
  const history = useHistory();
  


  const handleLogIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        history.push(location.state?.from||'/home');
      setUser(result.user);
    })
    .finally(setLoading(false))
    .catch((error) => {
      setError(error.message);
    });
  }
  return (
    <div className="d-flex flex-column flex-lg-row-reverse align-items-center">
      <div>
        <img className="img-fluid" src={login} alt="" />
      </div>
      <Container className="d-flex flex-column p-3 align-items-center">
        <h1 className="text-center display-5 mb-5">
          Not Signed In Yet?
        </h1>
        <div
          className="d-grid gap-4 p-5 shadow"
          style={{
            backgroundImage:
              " linear-gradient(to bottom right, #DFDFDF, #CEC4C2)",
          }}
        >
          {user?.displayName ? (
            <h1 className="text-center">
              Welcome{" "}
              <span style={{ color: "#E75B00" }}>{user?.displayName}</span>
            </h1>
          ) : (
            <h1 className="text-center">Log into your account</h1>
          )}

          {user?.displayName ? (
            <button
              style={{ backgroundColor: "#4285F4", color: "#ffffff" }}
              type="button"
              className="btn btn-lg py-1 text-center"
              onClick={handleGoogleSignOut}
            >
              <img
                className="img-fluid"
                style={{ paddingRight: "1rem" }}
                src={googleLogo}
                alt=""
              />
              Sign out
            </button>
          ) : (
            <button
              style={{ backgroundColor: "#4285F4", color: "#ffffff" }}
              type="button"
              className="btn btn-lg py-1 text-center"
              onClick={handleLogIn}
            >
              <img
                className="img-fluid"
                style={{ paddingRight: "1rem" }}
                src={googleLogo}
                alt=""
              />
              Sign in with Google
            </button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Login;
