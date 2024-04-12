import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/Login/protectedRoute";
import P62AX from "./components/P62AX";
import SupplierChain from "./components/SupplierChain";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function App() {
  const location = useLocation();
  const { pathname } = location;
  console.log("pathname: ", pathname);
  const removeHeader = ["/login"];
  return (
    <div className="md:container md:mx-auto">
      {!removeHeader.includes(pathname) && (
        <div className="m-auto">
          <Header />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/p62"
          element={
            <ProtectedRoute>
              <P62AX />
            </ProtectedRoute>
          }
        />
        <Route
          path="/supplier"
          element={
            <ProtectedRoute>
              <SupplierChain />
            </ProtectedRoute>
          }
        />
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
