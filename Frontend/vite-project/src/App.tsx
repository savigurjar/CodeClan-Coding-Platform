import { Routes, Route } from "react-router";
import Navbar from "./pages/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1 className="p-4">Welcome to CodeClan</h1>} />
        <Route path="/problems" element={<h1 className="p-4">Problems Page</h1>} />
        <Route path="/contests" element={<h1 className="p-4">Contests Page</h1>} />
        <Route path="/discuss" element={<h1 className="p-4">Discuss Page</h1>} />
        <Route path="/leaderboard" element={<h1 className="p-4">Leaderboard Page</h1>} />
        <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
}

export default App;
