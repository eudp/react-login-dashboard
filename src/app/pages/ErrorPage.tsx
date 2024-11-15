import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      role="alert"
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center"
    >
      <div className="text-white text-center">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p>
          {error instanceof Error
            ? error.message
            : "An unexpected error occurred."}
        </p>
      </div>
    </div>
  );
}
