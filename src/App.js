import logo from "./logo.svg";
import "./App.css";
import Bugs from "./components/BugsRR";
import ConfigStore from "./store/configStore";
import { Provider } from "react-redux";
import BugsList from "./components/BugsList";

const store = ConfigStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />
    </Provider>
  );
}

export default App;
