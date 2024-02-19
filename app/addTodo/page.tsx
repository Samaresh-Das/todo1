import AddTodo from "@/components/AddTodo";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center mt-9">
        Add <span className="text-blue-600 dark:text-blue-500">Todo</span>
      </h1>
      <AddTodo />
    </>
  );
};

export default page;
