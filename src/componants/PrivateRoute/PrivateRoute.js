import { Container, Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Container
        style={{ height: "50vh" }}
        className="d-flex align-items-center justify-content-center mb-5"
      >
        <Spinner animation="border" variant="secondary" />
      </Container>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
