import "./index.css";
import HomePage from "./components/HomePage";
import SignInPage from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/products/Products";

const repoName = "crown-funeral";

function App() {
  return (
    <Router basename={`/${repoName}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
