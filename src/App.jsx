import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksIcecreamContainer from "./components/HooksIcecreamContainer";

function App() {
  return (
    <>
      <Provider store={store}>
        <HooksIcecreamContainer />
        <CakeContainer />
      </Provider>
    </>
  );
}

export default App;
