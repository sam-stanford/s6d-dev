import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
      </BrowserRouter>
    </>
  );
}

export default App;
