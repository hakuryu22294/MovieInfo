import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    useEffect(() => {
        document.title = "Page Not Found";
    })
  return (
    <main>
      <div className="text-center h-screen flex flex-col items-center justify-center">
        <h1 className="mb-4 text-9xl font-semibold text-red-500">404</h1>
        <p className="mb-4 text-4xl text-gray-600">
          Oops! Looks like you're lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600 text-3xl">
          Let's get you back{" "}
          <Link  to={"/"} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2">Home</Link>
        </p>
      </div>
    </main>
  );
};

export default PageNotFound;
