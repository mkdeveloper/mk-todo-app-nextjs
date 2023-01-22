import Todo from "./todo";
async function getTodo() {
  let todos = await fetch(
    "https://thisisjustfortodoapp.vercel.app/api/todo/list"
  );

  return todos.json();
}

export default async function Todolist() {
  let { todos } = await getTodo();
  return (
    <div>
      <ul>
        {todos.map((obj: { id: string }) => {
          return (
            <li key={obj.id}>
              {/* @ts-ignore */}
              <Todo todo={obj} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
