import React from "react";

interface Props {
  todoText: string;
}

const TodoCard = ({ todoText }: Props) => {
  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4 text-center">
          <h2>{todoText}</h2>
        </li>
      </ul>
    </div>
  );
};

export default TodoCard;
