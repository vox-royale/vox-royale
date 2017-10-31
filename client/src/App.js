import React from "react";
import Game from "./pages/Game";
import Practice from "./pages/Practice";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import API from "./utils/API";

const App = function() {

  return <Router>
  <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/practice" component={Practice} />
      <Route exact path="/game" component={Game} />
  </div>
</Router>;
}

export default App;