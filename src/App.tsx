import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";
import Error from "./components/Error";

const AppAuth = React.lazy(() => import("./containers/AppAuth"));
const AppNoAuth = React.lazy(() => import("./containers/AppNoAuth"));

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  if (isAuthenticated) {
    return (
      <React.Suspense fallback={<Loading />}>
        <AppAuth />
      </React.Suspense>
    );
  }
  return (
    <React.Suspense fallback={<Loading />}>
      <AppNoAuth />
    </React.Suspense>
  );
};

export default App;
