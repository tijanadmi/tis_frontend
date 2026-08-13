import styled from "styled-components";
import LoginForm from "@tis/auth/LoginForm";
import Logo from "@tis/ui/Logo";
import Heading from "@tis/ui/Heading";

const Layout = styled.main`min-height:100vh;display:grid;grid-template-columns:48rem;align-content:center;justify-content:center;gap:3.2rem;background:var(--color-grey-50);`;
export default function Login() {
  return <Layout><Logo /><Heading as="h4">Технички информациони систем</Heading><LoginForm /></Layout>;
}
