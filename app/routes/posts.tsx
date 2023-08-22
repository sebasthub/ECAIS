import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await getUser(request);
};

export default function Post() {
  const data = useLoaderData<typeof loader>();
  return (
    <div className="bg-gray-900 h-screen w-full">
      <Layout data={data != null}>
        <h2>aga2
        </h2>
      </Layout>
    </div>
  );
}
