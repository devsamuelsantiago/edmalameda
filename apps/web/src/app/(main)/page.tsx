import { redirect } from "next/navigation";

export default function Home() {
  const authenticated = false;

  if (!authenticated) {
    redirect("/auth/login");
  }
  return (
    <main className="bg-gradient-to-br from-zinc-950 to-zinc-800 h-screen">
      <center className="text-5xl text-white font-bold flex items-center justify-center h-full">Hello, world!</center>
    </main>
  );
}
