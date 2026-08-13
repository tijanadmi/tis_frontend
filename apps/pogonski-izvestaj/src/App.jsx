import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@tis/ui/ProtectedRoute";
import WorkspaceLayout from "@tis/ui/WorkspaceLayout";
import Dashboard from "./pages/Dashboard";
import DashboardDay from "./pages/DashboardDay";
import DashboardPI from "./pages/DashboardPI";
import MonthT1 from "./pages/MonthT1"; import MonthT2 from "./pages/MonthT2"; import MonthT3 from "./pages/MonthT3"; import MonthT4 from "./pages/MonthT4";
import DayT1 from "./pages/DayT1"; import DayT2 from "./pages/DayT2"; import DayT3 from "./pages/DayT3"; import DayT4 from "./pages/DayT4";
import PIT1 from "./pages/PIT1"; import PIT2 from "./pages/PIT2"; import PIT3 from "./pages/PIT3"; import PIT4 from "./pages/PIT4";

const navigation=[
  {to:"/",label:"Месечни извештај",end:true},
  {to:"/dnevni",label:"Дневни извештај"},
  {to:"/pogonski",label:"Погонски извештај"}
];
export default function App(){return <BrowserRouter basename="/pogonski-izvestaj"><Routes>
  <Route element={<ProtectedRoute><WorkspaceLayout navigation={navigation}/></ProtectedRoute>}>
    <Route index element={<Dashboard/>}/><Route path="dnevni" element={<DashboardDay/>}/><Route path="pogonski" element={<DashboardPI/>}/>
    <Route path="mesecni/t1" element={<MonthT1/>}/><Route path="mesecni/t2" element={<MonthT2/>}/><Route path="mesecni/t3" element={<MonthT3/>}/><Route path="mesecni/t4" element={<MonthT4/>}/>
    <Route path="dnevni/t1" element={<DayT1/>}/><Route path="dnevni/t2" element={<DayT2/>}/><Route path="dnevni/t3" element={<DayT3/>}/><Route path="dnevni/t4" element={<DayT4/>}/>
    <Route path="pogonski/t1" element={<PIT1/>}/><Route path="pogonski/t2" element={<PIT2/>}/><Route path="pogonski/t3" element={<PIT3/>}/><Route path="pogonski/t4" element={<PIT4/>}/>
  </Route><Route path="*" element={<Navigate replace to="/"/>}/>
  </Routes></BrowserRouter>;}
