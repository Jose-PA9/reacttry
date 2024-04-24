import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const [name, setName] = useState("batman");
  console.dir("render with name: ", name);
  const users = [
    {
      userName: "batman",
      name: "Bruce Wayne",
      initialIsFollowing: true,
    },
    {
      userName: "ibai",
      name: "Ibai apellido de ibai",
      initialIsFollowing: false,
    },
    {
      userName: "rust",
      name: "Nombre de rust",
      initialIsFollowing: true,
    },
    {
      userName: "dot",
      name: "Nombre de rust",
      initialIsFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, initialIsFollowing } = user;
        return (
          <TwitterFollowCard key = {userName} initialIsFollowing={initialIsFollowing} userName={userName}>
            {name}
          </TwitterFollowCard>
        );
      })}

      <button onClick={() => setName("robin")}>Cambiar nombre</button>
    </section>
  );
}
