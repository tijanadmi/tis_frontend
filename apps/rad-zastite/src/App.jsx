import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@tis/ui/ProtectedRoute";
import WorkspaceLayout from "@tis/ui/WorkspaceLayout";
import DashboardZastita from "./pages/DashboardZastita";
const navigation=[{to:"/",label:"Рад заштите",end:true}];
export default function App(){return <BrowserRouter basename="/rad-zastite"><Routes><Route element={<ProtectedRoute><WorkspaceLayout navigation={navigation}/></ProtectedRoute>}><Route index element={<DashboardZastita/>}/></Route><Route path="*" element={<Navigate replace to="/"/>}/></Routes></BrowserRouter>;}
