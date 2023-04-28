import Routers from "./routers/Routers";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <CartProvider>
      <Routers />
    </CartProvider>
  );
}

export default App;
