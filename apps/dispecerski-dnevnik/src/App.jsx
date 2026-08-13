import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@tis/ui/ProtectedRoute";
import WorkspaceLayout from "@tis/ui/WorkspaceLayout";
import DDNOpenShifts from "./pages/DDNOpenShifts";
import DDNClosedShifts from "./pages/DDNClosedShifts";
import DDNInterruptionOfDeliveryK from "./pages/DDNInterruptionOfDeliveryK";
import DDNInterruptionOfDeliveryP from "./pages/DDNInterruptionOfDeliveryP";
const navigation = [
  {to:"/",label:"Преглед отворених смена",end:true}, {to:"/zatvorene-smene",label:"Преглед затворених смена"},
  {to:"/prekidi-korisnika",label:"Прекиди корисника"}, {to:"/prekidi-proizvodnje",label:"Прекиди производње"}
];
export default function App() { return <BrowserRouter basename="/dispecerski-dnevnik"><Routes>
  <Route element={<ProtectedRoute><WorkspaceLayout navigation={navigation} /></ProtectedRoute>}>
    <Route index element={<DDNOpenShifts />} /><Route path="zatvorene-smene" element={<DDNClosedShifts />} />
    <Route path="prekidi-korisnika" element={<DDNInterruptionOfDeliveryK />} /><Route path="prekidi-proizvodnje" element={<DDNInterruptionOfDeliveryP />} />
  </Route><Route path="*" element={<Navigate replace to="/" />} /></Routes></BrowserRouter>; }
