import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "./Components/Modal";
import PasswordContextProvider from "./Context/PasswordContextProvider";



function App() {
  return (
    <PasswordContextProvider >

    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </PasswordContextProvider>
  );
}

export default App;
