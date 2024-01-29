import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Erro from "./Views/Erro";
import Layout from "./Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Erro />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
