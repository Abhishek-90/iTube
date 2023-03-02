import ReactDOM from "react-dom";
import ITubeApp from "./ITubeApp";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <ITubeApp />
  </Router>,
  document.getElementById("root")
);
