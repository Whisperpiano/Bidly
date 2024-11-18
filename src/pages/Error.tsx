import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const typedError = error as { statusText: string; message: string };
  console.log(error);
  return (
    <div id="error-page">
      <h1>Error</h1>
      <p>Something went wrong</p>
      <p>
        <i>{typedError.statusText || typedError.message}</i>
      </p>
    </div>
  );
}
