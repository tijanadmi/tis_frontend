import styled from "styled-components";
import Heading from "@tis/ui/Heading";
import { applicationUrl } from "@tis/config/urls";
import Header from "@tis/ui/Header";
import { MdEventNote, MdSchema, MdSecurity, MdSyncProblem } from "react-icons/md";

const Page = styled.div`min-height:100vh;background:var(--color-grey-100);display:grid;grid-template-rows:auto 1fr;`;
const Main = styled.main`padding:3.2rem 4.8rem 5rem;`;
const Content = styled.div`max-width:130rem;margin:0 auto;`;
const Hero = styled.section`min-height:34rem;border-radius:1.6rem;overflow:hidden;position:relative;display:flex;align-items:center;padding:5rem;background:linear-gradient(90deg,rgba(4,18,38,.98) 0%,rgba(4,18,38,.82) 33%,rgba(4,18,38,.15) 70%),url("/control-room-hero.png") center/cover no-repeat;box-shadow:var(--shadow-lg);color:#fff;`;
const HeroCopy = styled.div`max-width:53rem;position:relative;z-index:1;`;
const Eyebrow = styled.p`font-size:1.3rem;letter-spacing:.16em;text-transform:uppercase;color:#93c5fd;font-weight:700;margin-bottom:1.2rem;`;
const Title = styled.h1`font-size:4rem;line-height:1.15;margin-bottom:1.6rem;color:#fff;`;
const Intro = styled.p`font-size:1.7rem;line-height:1.65;color:#dbeafe;`;
const SectionHeading = styled(Heading)`margin-top:3.6rem;`;
const Grid = styled.div`margin-top:2rem;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1.8rem;@media(max-width:1000px){grid-template-columns:repeat(2,1fr);}@media(max-width:620px){grid-template-columns:1fr;}`;
const Card = styled.a`background:var(--color-grey-0);color:var(--color-grey-700);padding:2.4rem;border:1px solid var(--color-grey-200);border-radius:1.2rem;box-shadow:var(--shadow-sm);text-decoration:none;display:flex;align-items:center;gap:1.5rem;transition:.2s;&:hover{transform:translateY(-3px);border-color:var(--color-brand-500);box-shadow:var(--shadow-md);}`;
const CardIcon = styled.span`width:4.8rem;height:4.8rem;flex:0 0 auto;border-radius:1rem;background:var(--color-brand-100);color:var(--color-brand-700);display:grid;place-items:center;font-size:2.5rem;`;
const CardLabel = styled.span`font-size:1.65rem;font-weight:600;line-height:1.35;`;
const apps = [
  ["Диспечерски дневник РДЦ", applicationUrl("ddn"), <MdEventNote />],
  ["Погонски извештај", applicationUrl("pogonski"), <MdSyncProblem />],
  ["Рад заштите", applicationUrl("zastita"), <MdSecurity />],
  ["Шеме", applicationUrl("sheme"), <MdSchema />]
];
export default function Portal() {
  return <Page><Header /><Main><Content>
    <Hero><HeroCopy><Eyebrow>Јединствен приступ оперативним подацима</Eyebrow><Title>Технички информациони систем</Title><Intro>Изаберите област рада и наставите у одговарајућу апликацију. Све целине користе заједнички изглед, кориснички налог и податке.</Intro></HeroCopy></Hero>
    <SectionHeading as="h2">Апликације</SectionHeading><Grid>{apps.map(([label,url,icon]) =>
      <Card href={url} key={url}><CardIcon>{icon}</CardIcon><CardLabel>{label}</CardLabel></Card>)}</Grid>
  </Content></Main></Page>;
}
