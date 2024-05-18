import AddTodo from "@/Components/AddTodo";
import styles from "./page.module.css";
import { Todos } from "@/Components/Todos";

export default function Home() {
  return (
    <main>
      <h1>Welcome to NextJS + TypeScript tutorial</h1>
       <AddTodo/>
       <Todos />
    </main>
  );
}
