import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import { portalUrl } from "@tis/config/urls";
import { HiOutlineHome } from "react-icons/hi2";

const Shell = styled.div`display:grid;grid-template-columns:7.2rem 1fr;grid-template-rows:auto 1fr;height:100vh;& > header{grid-column:2/-1;}`;
const Sidebar = styled.aside`grid-row:1/-1;background:var(--color-sidebar-bg);border-right:1px solid var(--color-grey-100);padding:2.4rem .8rem;display:flex;flex-direction:column;align-items:center;overflow:visible;z-index:100;`;
const Brand = styled.a`width:4.6rem;height:4.6rem;border-radius:1rem;background:var(--color-brand-600);color:white;display:grid;place-items:center;text-decoration:none;font-size:1.5rem;font-weight:700;letter-spacing:-.05em;`;
const Nav = styled.nav`display:flex;flex-direction:column;gap:.8rem;margin-top:3rem;width:100%;`;
const NavigationItem = styled.div`position:relative;&:hover span{opacity:1;visibility:visible;transform:translateX(0);}`;
const Item = styled(NavLink)`width:5.4rem;height:4.8rem;color:var(--color-grey-300);border-radius:.8rem;text-decoration:none;display:grid;place-items:center;font-size:2.4rem;border-left:3px solid transparent;&:hover{background:var(--color-grey-700);color:var(--color-grey-0);}&.active{background:var(--color-grey-700);color:var(--color-brand-200);border-left-color:var(--color-brand-500);}`;
const Tooltip = styled.span`position:absolute;left:6.3rem;top:50%;transform:translate(-.6rem,-50%);white-space:nowrap;background:var(--color-grey-900);color:var(--color-grey-0);padding:.7rem 1rem;border-radius:.6rem;font-size:1.3rem;box-shadow:var(--shadow-md);opacity:0;visibility:hidden;transition:.18s;pointer-events:none;z-index:200;`;
const PortalLink = styled.a`margin-top:auto;width:5.4rem;height:4.8rem;color:var(--color-grey-300);display:grid;place-items:center;border-radius:.8rem;font-size:2.3rem;position:relative;&:hover{background:var(--color-grey-700);color:var(--color-grey-0);}&:hover span{opacity:1;visibility:visible;transform:translateX(0);}`;
const Main = styled.main`background:var(--color-grey-200);padding:4rem 4.8rem 6.4rem;overflow:auto;`;
const Container = styled.div`max-width:300rem;margin:0 auto;display:flex;flex-direction:column;gap:3.2rem;`;

export default function WorkspaceLayout({ navigation }) {
  return <Shell><Header /><Sidebar><Brand href={portalUrl()} aria-label="ТИС портал">TIS</Brand><Nav>{navigation.map((item) =>
    <NavigationItem key={item.to}><Item to={item.to} end={item.end} aria-label={item.label}>{item.icon}</Item><Tooltip>{item.label}</Tooltip></NavigationItem>)}</Nav>
    <PortalLink href={portalUrl()} aria-label="Почетни мени"><HiOutlineHome /><Tooltip>Почетни мени</Tooltip></PortalLink></Sidebar><Main><Container><Outlet /></Container></Main></Shell>;
}
