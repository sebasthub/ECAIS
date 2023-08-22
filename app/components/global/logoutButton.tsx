import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return (await getUser(request)) ? getUser(request) : null;
};

export default function LogoutButton() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      {data ? (
        <form action="/logout" method="post">
          <button
            type="submit"
            className="text-white hover:bg-gray-700 rounded-md p-1"
          >
            Logout
          </button>
        </form>
      ) : null}
    </>
  );
}
