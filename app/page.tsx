import AddTodo from "./addTodo";
import Todolist from "./todo-list";
export default function Home() {
  return (
    <>
      <h1>Mk's Todo App</h1>
      <AddTodo />

      {/* @ts-ignore */}
      <Todolist />
    </>
  );
}
