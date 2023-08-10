import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Founders from "~/founders";
import Inicial from "~/inicial";
import Inovacao from "~/inovacao";
import Visao from "~/visao";

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

export default function Index() {
  return (
    <main className="w-screen">
      <Inicial></Inicial>
      <Visao></Visao>
      <Inovacao></Inovacao>
      <Founders></Founders>
    </main>
  );
}
