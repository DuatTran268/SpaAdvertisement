import { Provider } from "react-redux";
import Routers from "./routers/Routers";
import { CartProvider } from "react-use-cart";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <Routers />
      </CartProvider>
    </Provider>
  );
}

export default App;
