import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return await getUser(request);
};

export default function Post() {
  const data = useLoaderData<typeof loader>();
  console.log(data)
  return (
    <div className="bg-gray-900 h-screen w-full">
      <Layout data={data != null}>
        <div className="flex">
            <div className="h-20 bg-white flex p-2">
                <img src={data.pessoa.imagem}/>
                <h2>ridge racer</h2>
            </div>
        </div>
      </Layout>
    </div>
  );
}
