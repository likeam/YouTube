import { BrowserRouter } from "react-router-dom";
import AppContext from "./Context/contextApi";
import Header from "./Components/Header";

export default function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </AppContext>
  );
}
