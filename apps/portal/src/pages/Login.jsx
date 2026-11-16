import styled from "styled-components";
import { HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineSquares2X2 } from "react-icons/hi2";
import LoginForm from "@tis/auth/LoginForm";

const Page = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(42rem, 1.05fr) minmax(46rem, 0.95fr);
  background: var(--color-grey-0);
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const BrandPanel = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: clamp(4rem, 8vw, 10rem);
  color: #f8fafc;
  background: radial-gradient(circle at 18% 82%, rgba(99,102,241,.34), transparent 30%),
    radial-gradient(circle at 88% 14%, rgba(56,189,248,.18), transparent 25%),
    linear-gradient(145deg, #0b1f33 0%, #0f2a44 52%, #132f52 100%);

  &::before, &::after { content: ""; position: absolute; border: 1px solid rgba(255,255,255,.08); border-radius: 50%; }
  &::before { width: 48rem; height: 48rem; right: -24rem; top: -18rem; }
  &::after { width: 30rem; height: 30rem; right: -12rem; top: -9rem; }

  @media (max-width: 900px) { min-height: 30rem; padding: 4rem clamp(2.4rem, 7vw, 6rem); }
  @media (max-width: 560px) { min-height: 21rem; }
`;

const BrandContent = styled.div`position: relative; z-index: 1; max-width: 62rem;`;

const BrandMark = styled.div`
  display: flex; align-items: center; gap: 1.6rem; margin-bottom: 4.8rem;
  img { width: 7.2rem; height: 7.2rem; border-radius: 1.4rem; object-fit: cover; }
  span { display: block; font-size: 1.3rem; font-weight: 600; letter-spacing: .16em; text-transform: uppercase; color: #cbd5e1; }
  strong { display: block; font-size: 2.2rem; letter-spacing: .03em; }
  @media (max-width: 560px) { margin-bottom: 2.4rem; }
`;

const Title = styled.h1`
  max-width: 58rem; margin-bottom: 2rem; font-size: clamp(3.4rem, 4.2vw, 5.8rem);
  line-height: 1.12; letter-spacing: -.035em; color: #fff;
`;

const Intro = styled.p`
  max-width: 56rem; font-size: 1.7rem; line-height: 1.8; color: #cbd5e1;
  @media (max-width: 560px) { display: none; }
`;

const Capabilities = styled.ul`
  display: flex; flex-wrap: wrap; gap: 1.2rem 2.4rem; margin-top: 4rem;
  li { display: flex; align-items: center; gap: .8rem; font-size: 1.35rem; color: #e2e8f0; }
  svg { width: 1.8rem; height: 1.8rem; color: #a5b4fc; }
  @media (max-width: 560px) { display: none; }
`;

const FormPanel = styled.section`
  display: flex; align-items: center; justify-content: center; padding: clamp(4rem, 8vw, 9rem);
  background: linear-gradient(rgba(255,255,255,.88), rgba(255,255,255,.96)),
    radial-gradient(circle at 100% 0%, #e0e7ff, transparent 40%);
  @media (max-width: 900px) { min-height: calc(100vh - 30rem); }
  @media (max-width: 560px) { min-height: calc(100vh - 21rem); padding: 4rem 2.4rem; }
`;

const FormContent = styled.div`width: 100%; max-width: 46rem;`;
const Eyebrow = styled.p`margin-bottom: .8rem; font-size: 1.3rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--color-brand-600);`;
const FormTitle = styled.h2`margin-bottom: 1rem; font-size: clamp(3rem, 4vw, 4rem); line-height: 1.2; letter-spacing: -.025em; color: #172033;`;
const FormDescription = styled.p`margin-bottom: 3.6rem; color: #64748b; line-height: 1.7;`;
const Support = styled.p`margin-top: 2.4rem; text-align: center; font-size: 1.25rem; color: #94a3b8;`;

export default function Login() {
  return (
    <Page>
      <BrandPanel>
        <BrandContent>
          <BrandMark>
            <img src="/tis_black4.png" alt="ТИС" />
            <div><span>Технички информациони систем</span><strong>ТИС портал</strong></div>
          </BrandMark>
          <Title>Подаци и процеси на једном месту.</Title>
          <Intro>Јединствен приступ оперативним извештајима, диспечерском дневнику, раду заштите и техничким шемама.</Intro>
          <Capabilities aria-label="Могућности система">
            <li><HiOutlineChartBar /> Оперативни извештаји</li>
            <li><HiOutlineSquares2X2 /> Централизован приступ</li>
            <li><HiOutlineShieldCheck /> Заштићени подаци</li>
          </Capabilities>
        </BrandContent>
      </BrandPanel>
      <FormPanel>
        <FormContent>
          <Eyebrow>Добро дошли</Eyebrow>
          <FormTitle>Пријава на систем</FormTitle>
          <FormDescription>Унесите своју корисничку шифру и лозинку за наставак.</FormDescription>
          <LoginForm />
          <Support>За проблеме са приступом обратите се администратору система.</Support>
        </FormContent>
      </FormPanel>
    </Page>
  );
}
