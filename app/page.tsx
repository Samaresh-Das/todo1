import Header from "@/components/Header";
import Todos from "@/components/Todos";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <main className="text-white">
        <Header />
        <Todos />
      </main>
    </SessionProvider>
  );
}
