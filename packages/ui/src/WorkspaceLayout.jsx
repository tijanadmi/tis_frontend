import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import Logo from "./Logo";
import { portalUrl } from "@tis/config/urls";

const Shell = styled.div`display:grid;grid-template-columns:26rem 1fr;grid-template-rows:auto 1fr;height:100vh;`;
const Sidebar = styled.aside`grid-row:1/-1;background:var(--color-sidebar-bg);border-right:1px solid var(--color-grey-100);padding:2.4rem 1.6rem;overflow-y:auto;`;
const Nav = styled.nav`display:flex;flex-direction:column;gap:.8rem;margin-top:3rem;`;
const Item = styled(NavLink)`color:var(--color-grey-700);padding:1rem 1.2rem;border-radius:var(--border-radius-sm);text-decoration:none;&.active,&:hover{background:var(--color-grey-100);}`;
const PortalLink = styled.a`display:block;margin-top:2rem;color:var(--color-brand-600);text-decoration:none;`;
const Main = styled.main`background:var(--color-grey-200);padding:4rem 4.8rem 6.4rem;overflow:auto;`;
const Container = styled.div`max-width:300rem;margin:0 auto;display:flex;flex-direction:column;gap:3.2rem;`;

export default function WorkspaceLayout({ navigation }) {
  return <Shell><Header /><Sidebar><Logo /><Nav>{navigation.map((item) =>
    <Item key={item.to} to={item.to} end={item.end}>{item.label}</Item>)}</Nav>
    <PortalLink href={portalUrl()}>← Почетни мени</PortalLink></Sidebar><Main><Container><Outlet /></Container></Main></Shell>;
}
