import AddTodo from "./addTodo";
import Todolist from "./todo-list";
export default function Home() {
  return (
    <>
      <AddTodo />

      {/* @ts-ignore */}
      <Todolist />
    </>
  );
}
