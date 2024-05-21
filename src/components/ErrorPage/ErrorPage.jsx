import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex flex-col justify-center items-center font-serif">
      <h1 className="text-5xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink to={"/"} className={"text-green-600"}>
        Go Back
      </NavLink>
    </div>
  );
};

export default ErrorPage;
