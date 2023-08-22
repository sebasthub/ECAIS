import Founders from "./founders";
import Inicial from "./inicial";
import Inovacao from "./inovacao";
import Visao from "./visao";

export default function Principal() {
  return (
    <main className="w-screen">
      <Inicial></Inicial>
      <Visao></Visao>
      <Inovacao></Inovacao>
      <Founders></Founders>
    </main>
  );
}
