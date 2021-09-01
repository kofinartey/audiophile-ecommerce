import AudiophileApp from "./AudiophileApp";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Provider store={store}>
          <div>
            <AudiophileApp />
          </div>
        </Provider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
