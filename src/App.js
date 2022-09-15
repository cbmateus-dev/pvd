import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import CaixaPage from "./Page/CaixaPage";
import MainPage from "./Page/MainPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/caixapage" element={<CaixaPage />} />
      </Routes>
    </Router>
  );
}
export default App;