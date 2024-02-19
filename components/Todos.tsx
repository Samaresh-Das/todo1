"use client";

import useSWR from "swr";
import TodoCard from "./TodoCard";
import LoadingSpinner from "./LoadingSpinner";
import Link from "next/link";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Todo {
  text: string;
}

const Todos = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (url: string) =>
    fetch(url).then((res) => {
      return res.json();
    });

  const { data, error, isLoading } = useSWR(
    "https://tasklist-1ef9e-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
    fetcher
  );

  return (
    <>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto mt-[200px]">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white text-center">
          Todos
        </h5>
        {isLoading && <LoadingSpinner />}
        {data &&
          Object.keys(data).map((key) => {
            const todo: Todo = data[key];
            return <TodoCard key={key} todoText={todo.text} />;
          })}
        <Link
          href={session?.data?.user ? "/addTodo" : ""}
          className="mx-auto focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add Todo
        </Link>
      </div>
    </>
  );
};

export default Todos;
