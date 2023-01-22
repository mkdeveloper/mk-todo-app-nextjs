"use client";

import { useRouter } from "next/navigation";

async function update(id: string, isDone: boolean, refresh: () => void) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id: string, refresh: () => void) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({
  todo,
}: {
  todo: { name: string; id: string; isDone: boolean };
}) {
  const router = useRouter();
  return (
    <>
      <input
        type="checkbox"
        className="checkBox"
        onChange={(toBeUpdate) =>
          update(todo.id, toBeUpdate.target.checked, router.refresh)
        }
        checked={todo.isDone}
      />
      <span>{todo.name}</span>

      <button onClick={() => deleteTodo(todo.id, router.refresh)}>
        Delete
      </button>
    </>
  );
}
