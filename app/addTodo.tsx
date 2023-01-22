"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function AddNewTodo(name: string, refresh: () => void) {
  fetch(`https://thisisjustfortodoapp.vercel.app/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Your Todo"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <button
          type="submit"
          onClick={async () => {
            if (name !== "") {
              AddNewTodo(name, router.refresh);
              setName("");
            }
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
