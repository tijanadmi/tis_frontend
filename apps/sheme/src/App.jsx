import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@tis/ui/ProtectedRoute";
import WorkspaceLayout from "@tis/ui/WorkspaceLayout";
import JSDSSheme from "./pages/JSDSSheme";
const navigation=[{to:"/",label:"Шеме",end:true}];
export default function App(){return <BrowserRouter basename="/sheme"><Routes><Route element={<ProtectedRoute><WorkspaceLayout navigation={navigation}/></ProtectedRoute>}><Route index element={<JSDSSheme/>}/></Route><Route path="*" element={<Navigate replace to="/"/>}/></Routes></BrowserRouter>;}
