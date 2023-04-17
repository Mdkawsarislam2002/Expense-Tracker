//  Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//  components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Transactions />
      <Footer />
    </Provider>
  );
}

export default App;
