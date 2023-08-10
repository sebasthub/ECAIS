import { Link, Outlet } from "@remix-run/react";

export default function Navbar() {
    return (
        <div className="min-h-full">
        <nav className="bg-gray-800 flex space-x-2 items-center p-3">
          <Link to={""}>
            <img src="logo.png" className="h-9 w-30 hover:bg-gray-700 rounded-md p-1"/>
          </Link>
          <Link to={""}>
              <h2 className="text-white hover:bg-gray-700 rounded-md p-1">visão</h2>
          </Link>
        </nav>
    </div>
    )
}