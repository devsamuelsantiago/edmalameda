"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import setJwtCookie from "./set-jwt-cookie";

export default function LoginView() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const email = event.target[0].value;
    const password = event.target[1].value;

    const response = await axios.post("http://localhost:5050/api/auth/login", {
      email: email,
      password: password,
    });

    setJwtCookie(response.data.access_token);
    alert(response);
  };
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-zinc-400 to-zinc-200">
      <div className="flex justify-stretch w-[80%] h-[90%] p-3 bg-white rounded-lg shadow-lg">
        <div className="flex items-center w-[50%] p-8">
          <center className="text-5xl font-bold w-full">[image]</center>
        </div>
        <div className="flex flex-col justify-center w-[50%] p-8">
          <form className="space-y-8" onSubmit={(e) => handleSubmit(e)}>
            <div className="space-y-2">
              <h1 className="flex text-3xl font-bold w-full justify-center">
                Olá!
              </h1>
              <h3 className="flex w-ful justify-center"> Seja bem-vindo!</h3>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col">
                <Input
                  className="h-12"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="flex flex-col">
                <Input
                  className="h-12"
                  type="password"
                  id="password"
                  placeholder="Senha"
                  required
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="p-0" variant="link">
                Esqueci minha senha
              </Button>
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="h-12 w-full">
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
