import { useState } from "react";
import Button from "@tis/ui/Button";
import Form from "@tis/ui/Form";
import Input from "@tis/ui/Input";
import FormRowVertical from "@tis/ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "@tis/ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Шифра">
        <Input
          type="text"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          // required
          // onInvalid={(e) => e.target.setCustomValidity("Шифра је обавезна")}
          // onInput={(e) => e.target.setCustomValidity("")} // Resetuje poruku kad korisnik počne da kuca
        />
      </FormRowVertical>
      <FormRowVertical label="Лозинка">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          // required
          // onInvalid={(e) => e.target.setCustomValidity("Лозинка је обавезна")}
          // onInput={(e) => e.target.setCustomValidity("")} // Resetuje poruku kad korisnik počne da kuca
        />
      </FormRowVertical>
      <FormRowVertical >
        
      </FormRowVertical>
      <FormRowVertical>
        <div style={{ marginTop: "1.6rem" , width: "100%" }}>
          <Button size="large" disabled={isLoading} style={{ width: "100%" }}>
            {!isLoading ? "Пријави се..." : <SpinnerMini />}
          </Button>
        </div>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
