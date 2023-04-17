import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <h1>React App</h1>
    </Provider>
  );
}

export default App;
