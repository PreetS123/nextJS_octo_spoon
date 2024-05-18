import AddTodo from "@/Components/AddTodo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1>Welcome to NextJS + TypeScript tutorial</h1>
       <AddTodo/>
    </main>
  );
}
