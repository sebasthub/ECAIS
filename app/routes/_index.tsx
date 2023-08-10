import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
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
      <div>
        <div className="w-screen text-center">
          <h2 className="text-4xl font-semibold m-4">fundadores</h2>
          <p className="text-xl font-medium m-2">
            conheça nossos fundadores todos profissionais com muita experiencia
            e anos na area
          </p>
        </div>
      </div>
    </main>
  );
}
