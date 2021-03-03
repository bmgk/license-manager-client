import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AppAuth = React.lazy(() => import("./containers/AppAuth"));
const AppNoAuth = React.lazy(() => import("./containers/AppNoAuth"));

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isAuthenticated) {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppAuth />
      </React.Suspense>
    );
  }
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AppNoAuth />
    </React.Suspense>
  );
};

export default App;
