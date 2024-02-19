"use client";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useFormik,
  FormikProvider,
} from "formik";
import { ReactEventHandler } from "react";

interface MyFormValues {
  todo: string;
}

const validate = (values: MyFormValues) => {
  const errors: Partial<MyFormValues> = {};

  if (!values.todo) {
    errors.todo = "Required";
  }

  return errors;
};

const AddTodo = () => {
  const initialValues: MyFormValues = { todo: "" };
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormikProvider value={formik}>
      <form className="max-w-sm mx-auto mt-10" onSubmit={formik.handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Todo
          </label>
          <Field
            as="textarea"
            id="todo"
            name="todo"
            //   rows={5}
            //   cols={10}

            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            //   value={values.todo}
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add
        </button>
      </form>
    </FormikProvider>
  );
};

export default AddTodo;
