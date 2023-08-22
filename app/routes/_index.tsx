import {
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import Founders from "~/components/principal/founders";
import Inicial from "~/components/principal/inicial";
import Inovacao from "~/components/principal/inovacao";
import Principal from "~/components/principal/principal";
import Visao from "~/components/principal/visao";
import { getUser } from "~/utils/auth.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "ECAIS" },
    {
      name: "description",
      content:
        "ECAIS é uma fabrica de software que preza pela qualidade e fidelidade",
    },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  return await getUser(request);
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <Layout data={data != null}>
        <Principal></Principal>
      </Layout>
    </>
  );
}
