import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TopNav } from "./components/common/TopNav";
import { Home } from "./components/main/Home";
import { NoticeBoard } from "./components/main/NoticeBoard";

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<NoticeBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
