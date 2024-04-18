import { ReactNode } from "react";

interface FormContainerProps {
  headline?: string | null;
  form?: ReactNode;
  addAttributes?: (name: string) => object | null;
}

export function FormContainer(props: FormContainerProps) {
  const {
    headline,
    form,
    addAttributes = () => ({}), // Default to no-op.
  } = props;

  return (
    <div className="container py-12">
      <div className="max-w-screen-sm mx-auto">
        {headline && (
          <h2
            {...addAttributes("headline")}
            className={
              "text-4xl font-bold mb-4"
            }
          >
            {headline}
          </h2>
        )}
        {form}
      </div>
    </div>
  );
}
