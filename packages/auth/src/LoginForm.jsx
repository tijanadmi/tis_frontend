import { useState } from "react";
import styled from "styled-components";
import { HiOutlineKey, HiOutlineUser } from "react-icons/hi2";
import Button from "@tis/ui/Button";
import Input from "@tis/ui/Input";
import SpinnerMini from "@tis/ui/SpinnerMini";
import { useLogin } from "./useLogin";

const Form = styled.form`display: grid; gap: 2.2rem;`;
const Field = styled.div`display: grid; gap: .8rem;`;
const Label = styled.label`font-size: 1.4rem; font-weight: 600; color: #334155;`;

const InputBox = styled.div`
  position: relative;
  svg { position: absolute; left: 1.5rem; top: 50%; width: 2rem; height: 2rem; transform: translateY(-50%); color: #94a3b8; pointer-events: none; }
  &:focus-within svg { color: var(--color-brand-600); }
`;

const StyledInput = styled(Input)`
  min-height: 5.2rem; padding: 1.2rem 1.5rem 1.2rem 4.8rem; border-color: #cbd5e1;
  border-radius: .9rem; background: #fff; box-shadow: 0 1px 2px rgba(15,23,42,.04);
  &::placeholder { color: #94a3b8; }
  &:focus { border-color: var(--color-brand-500); outline: 3px solid rgba(99,102,241,.14); }
`;

const SubmitButton = styled(Button)`
  width: 100%; min-height: 5.2rem; margin-top: .6rem; border-radius: .9rem; font-weight: 600;
  box-shadow: 0 1rem 2rem rgba(79,70,229,.2); transition: transform .2s, background-color .2s, box-shadow .2s;
  &:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 1.2rem 2.4rem rgba(79,70,229,.26); }
  &:disabled { opacity: .7; }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password }, { onSettled: () => { setEmail(""); setPassword(""); } });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="email">Корисничка шифра</Label>
        <InputBox>
          <HiOutlineUser aria-hidden="true" />
          <StyledInput type="text" id="email" name="username" autoComplete="username"
            placeholder="Унесите корисничку шифру" value={email}
            onChange={(e) => setEmail(e.target.value)} disabled={isLoading} required />
        </InputBox>
      </Field>
      <Field>
        <Label htmlFor="password">Лозинка</Label>
        <InputBox>
          <HiOutlineKey aria-hidden="true" />
          <StyledInput type="password" id="password" name="password" autoComplete="current-password"
            placeholder="Унесите лозинку" value={password}
            onChange={(e) => setPassword(e.target.value)} disabled={isLoading} required />
        </InputBox>
      </Field>
      <SubmitButton size="large" disabled={isLoading}>
        {isLoading ? <SpinnerMini /> : "Пријави се"}
      </SubmitButton>
    </Form>
  );
}

export default LoginForm;
