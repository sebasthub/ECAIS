import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export default function Navbar(prop: any) {
  return (
    <div className="fixed w-full">
      <nav className="bg-gray-800 flex space-x-2 items-center p-3">
        <Link to={"/"}>
          <img
            src="logo.png"
            className="h-9 w-30 hover:bg-gray-700 rounded-md p-1"
          />
        </Link>
        <Link to={"/#visao"}>
          <h2 className="text-white hover:bg-gray-700 rounded-md p-1">visão</h2>
        </Link>
        <Link to={"/#inovacao"}>
          <h2 className="text-white hover:bg-gray-700 rounded-md p-1">
            inovação
          </h2>
        </Link>
        <Link to={"/#fundadores"}>
          <h2 className="text-white hover:bg-gray-700 rounded-md p-1">
            fundadores
          </h2>
        </Link>
        {prop.data ? (
          <form action="/logout" method="post">
            <button type="submit" className="button text-white hover:bg-gray-700 rounded-md p-1">
              Logout
            </button>
          </form>
        ) : null}
      </nav>
    </div>
  );
}
