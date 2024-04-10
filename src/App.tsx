import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import "./firestore/firestore"

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
