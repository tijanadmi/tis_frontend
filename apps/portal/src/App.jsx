import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "@tis/ui/ProtectedRoute";

export default function App() {
  return <BrowserRouter><Routes>
    <Route index element={<ProtectedRoute><Portal /></ProtectedRoute>} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes></BrowserRouter>;
}
