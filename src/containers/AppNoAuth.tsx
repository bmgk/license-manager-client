import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AppNoAuth = () => {
  const { loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <></>;
};

export default AppNoAuth;
