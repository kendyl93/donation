import { Form, FormSpy } from "react-final-form";
import { useFormContent } from "./hooks";
import { FormBody } from "./FormBody";
import { FormValues } from "./types";

export const FormContent = () => {
  const { initialValues, handleFormValuesChange, onSubmit } = useFormContent();

  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <>
            <FormBody />
            <FormSpy
              subscription={{ values: true }}
              onChange={handleFormValuesChange}
            />
          </>
        </form>
      )}
    />
  );
};
