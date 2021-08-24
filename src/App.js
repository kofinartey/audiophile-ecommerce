import AudiophileApp from "./AudiophileApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <AudiophileApp />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
