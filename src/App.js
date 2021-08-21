import AudiophileApp from "./AudiophileApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <AudiophileApp />
      </div>
    </Router>
  );
}

export default App;
