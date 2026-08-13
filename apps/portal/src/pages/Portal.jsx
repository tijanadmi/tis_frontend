import styled from "styled-components";
import Heading from "@tis/ui/Heading";
import { applicationUrl } from "@tis/config/urls";

const Main = styled.main`min-height:100vh;background:var(--color-grey-100);padding:6rem;`;
const Grid = styled.div`max-width:110rem;margin:4rem auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(28rem,1fr));gap:2.4rem;`;
const Card = styled.a`background:var(--color-grey-0);color:var(--color-grey-700);padding:3.2rem;border-radius:var(--border-radius-md);box-shadow:var(--shadow-md);text-decoration:none;font-size:2rem;font-weight:600;&:hover{transform:translateY(-2px);}`;
const apps = [
  ["Диспечерски дневник РДЦ", applicationUrl("ddn")],
  ["Погонски извештај", applicationUrl("pogonski")],
  ["Рад заштите", applicationUrl("zastita")],
  ["Шеме", applicationUrl("sheme")]
];
export default function Portal() {
  return <Main><Heading as="h1">Технички информациони систем</Heading><Grid>{apps.map(([label,url]) =>
    <Card href={url} key={url}>{label}</Card>)}</Grid></Main>;
}
