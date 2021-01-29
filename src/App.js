import React from "react";
import SignInPage from "./auth/SignInPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUpPage from "./auth/SignUpPage";
import ErrorPage from "./ErrorPage";
import { useData } from "./contexts";

function App() {
  const { data } = useData();
  React.useEffect(() => {
    if (data.user) {
      console.log("true");
    } else {
      console.log("false");
    }
  }, [data]);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
