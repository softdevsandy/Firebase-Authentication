import React from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAuth } from "../../firebase/context";

function withAuthorization(Component) {
  function WithAuthorization() {
    const history = useHistory();
    const { currentUser } = useAuth();

    if (!currentUser) {
      history.push(ROUTES.LANDING);
    }

    return <>{currentUser ? <Component /> : null}</>;
  }

  return WithAuthorization;
}

export default withAuthorization;
