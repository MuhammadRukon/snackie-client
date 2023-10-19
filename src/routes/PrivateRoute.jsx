import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <Loading />;
  }
  if (!loading) {
    if (!user) {
      return <Navigate state={location.pathname} to="/login" />;
    }
    if (user) {
      return children;
    }
  }
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
