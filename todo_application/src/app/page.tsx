import AddTodo from "@/Components/AddTodo";
import styles from "./page.module.css";
import { Todos } from "@/Components/Todos";
import { Navbar } from "@/Components/Navbar";

export default function Home() {
  return (
    <main>
      <h1>Welcome to NextJS + TypeScript tutorial</h1>
      <Navbar/>
       <AddTodo/>
       <Todos />
    </main>
  );
}
