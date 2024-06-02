import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const error: any = useRouteError();

  //TODO: Make a proper error page

  return (
    <div
      id="error-page"
      className="flex items-center justify-center h-screen flex-col"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <p>Page {error?.statusText || error?.message}</p>
      </p>
    </div>
  );
}
